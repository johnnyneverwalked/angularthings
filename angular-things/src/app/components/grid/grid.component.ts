import {ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Input, isDevMode, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import * as Muuri from "muuri"; // has no @types
import * as DragSelect from "dragselect";
import {GridHostDirective} from "./grid-host.directive";
import {GridWidgetComponent} from "./grid-widget/grid-widget.component";
import IGridWidget, {IGridWidgetOptions, IWidgetEvent} from "../../interfaces/IGridWidget";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {HelperService} from "../../services/helper.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnDestroy {

  availableWidgets: IGridWidget[] = [
    {
      type: "UrlShortcutComponent",
      output: ["modifyWidgetData", "changeUrl"]
    },
    {
        type: "TodoListComponent",
      options: {
          class: "widget-lg"
      }
    },
    {
      type: "EmptySpace",
      options: {
        empty: true
      }
    },

  ];

  public hideMenu: boolean = true;
  public loading: boolean = false;
  public showAvailableWidgets: boolean = false;

  private grid: any;
  private ds: DragSelect;
  private availableWidgetsGrid: any;
  private editable: boolean = false;
  private layout: string[];
  private widgets: IGridWidget[] = [];
  private tmpItems: string[] = [];
  private movingItem: any = null;
  private onTrash: boolean = false;

  private _unsub$: Subject<void> = new Subject<void>();

  @Input() enableEdit: boolean = true;
  @Input() layoutAutoCalculate: boolean = false;
  @Input() enableDrag: boolean = true;
  @Input() dragSortInterval: number = 100;
  @Input() items: NodeList = null;
  @Input() itemSelector: string = null;
  @Input() alignRight: boolean = false;
  @Input() alignBottom: boolean = false;
  @Input() horizontal: boolean = false;

  @Output() widgetEvent = new EventEmitter<IWidgetEvent>();

  @ViewChild("mainGrid", {static: true}) private gridElement: ElementRef;
  @ViewChild("availableWidgetsGrid", {static: true}) private availableWidgetsGridElement: ElementRef;
  @ViewChild("availableContainer", {static: true}) private availableContainer: ElementRef;
  @ViewChild("host", {static: true}) private hostElement: ElementRef;
  @ViewChild("trash") private trash: ElementRef;
  @ViewChild(GridHostDirective, {static: true}) private gridHost: GridHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {

    this.initGrid();
    if (this.enableEdit) {
      this.initAvailableWidgetsGrid();
    }

    // load widgets
    const widgets = window.localStorage.getItem("widgets");
    const layout = window.localStorage.getItem("layout");

    if (widgets && layout) {
      this.widgets = JSON.parse(widgets);
      this.layout = JSON.parse(layout);
      // this.widgets = [];
      // this.layout = [];
      this.loadWidgets();
      setTimeout(() => this.applyLayout("instant"));
    }

    this.ds = new DragSelect({
      area: this.gridElement.nativeElement,
      selector: this.gridElement.nativeElement.querySelector(".drag-select"),
      multiSelectMode: false,
      onDragStart: (el) => {
        if (!this.isEditable()) {
          this.ds.break();
          return;
        }
      },
      onElementSelect: (el) => {
        if (el.classList.contains("widget-selected")) {
          el.classList.remove("widget-selected");
        } else {

          el.classList.add("widget-selected");
        }
      },
      onElementUnselect: (el) => {
        if (el.classList.contains("widget-selected")) {
          el.classList.remove("widget-selected");
        } else {

          el.classList.add("widget-selected");
        }
      },
      callback: () => this.ds.reset()
    });

  }

  ngOnDestroy(): void {
    this._unsub$.next();
  }

  /**
   * @description Initializes a Muuri instance using @Input options
   */
  private initGrid() {

    this.grid = new Muuri(this.gridElement.nativeElement, {
      items: this.enableEdit ? null : (this.itemSelector || this.items),
      dragEnabled: true,
      dragSortInterval: this.dragSortInterval,
      dragStartPredicate: () => {
        if (this.enableEdit) {
          return this.editable;
        }
        return this.enableDrag;
      },
      layout: {
        alignRight: this.alignRight,
        alignBottom: this.alignBottom,
        horizontal: this.horizontal,
      },
      layoutOnInit: !this.enableEdit,
    }).on("dragReleaseEnd", (item) => {
      // if the item is added send the template back and create the actual widget
      console.log(item);
      if (this.movingItem) {
        this._addItem(this.availableWidgets[this.movingItem]);
        item.getElement().classList.remove("widget-moving");
        this.grid.send(item, this.availableWidgetsGrid, -1, {layoutSender: "instant", layoutReceiver: "instant"});
        this.cd.detectChanges();
      }
      this.grid.refreshItems().layout();
    }).on("dragReleaseStart", (item) => {
      if (this.onTrash) {
        this.setItemsAsRemoved(item.getElement());
      }
    }).on("receive", (data) => {
      // track if the item is being added
      this.movingItem = data.item.getElement().getAttribute("widget-id");
    });

    if (this.layoutAutoCalculate) {
      this.gridElement.nativeElement.addEventListener("mouseenter", (e) => {
        this.grid.layout();
      });
      this.gridElement.nativeElement.addEventListener("mouseleave", (e) => {
        this.grid.layout();
      });
    }

  }

  /**
   * @description Initializes a custom Muuri grid with static items in it to be used for the widget menu
   */
  private initAvailableWidgetsGrid() {
    this.availableWidgetsGrid = new Muuri(this.availableWidgetsGridElement.nativeElement, {
      dragEnabled: true,
      dragSort: () => {
        return [this.availableWidgetsGrid, this.grid];
      },
      dragContainer: document.body
    }).on("dragStart", (item) => {
      item.getElement().classList.add("widget-moving");
    }).on("dragReleaseEnd", (item) => {
      item.getElement().classList.remove("widget-moving");
    }).on("receive", () => {
      // make sure no item tracked as being added
      this.movingItem = null;
    });


  }

  private _loadAvailableWidgets() {
    this.availableWidgets.forEach(widgetData => {
      this._createWidget(widgetData, false);
    });
    const elements = this.hostElement.nativeElement.querySelectorAll(".widget");

    elements.forEach((el, idx) => {
      el.setAttribute("widget-id", idx);
    });

    this.availableWidgetsGrid.add(elements);
    setTimeout(() => {
      this.hideMenu = false;
    }, 300);
  }

  /**
   * @description Enables or disables the edit menu of the grid
   * @param {boolean} enable
   * @param {boolean} saveLayout
   */
  public async editLayout(enable: boolean, saveLayout: boolean = true) {
    this.editable = enable;

    if (!this.editable) {
      this.grid.getItems().forEach(el => {
        this._makeWidgetUneditable(el.getElement());
      });
      this.gridElement.nativeElement.removeAllListeners("click");
      this.gridElement.nativeElement.removeAllListeners("touchend");
      document.documentElement.removeEventListener("keyup", this._keyShortcuts);
      this.tmpItems = [];
      this.onTrash = false;
      if (saveLayout) {
        await this.saveLayout();
      }
    } else {
      await HelperService.sleep();

      this.grid.getItems().forEach(el => {
        this._makeWidgetEditable(el.getElement());
      });
      document.documentElement.addEventListener("keyup", this._keyShortcuts.bind(this));
      this.gridElement.nativeElement.addEventListener("click", (e) => {
        this.grid.getItems().forEach(item => {
          if (!this.ds?.getSelection().includes(item.getElement())) {
            item.getElement().classList.remove("widget-selected");
          }
        });
      });
      this.gridElement.nativeElement.addEventListener("touchend", (e) => {
        this.grid.getItems().forEach(item => {
          if (!this.ds?.getSelection().includes(item.getElement())) {
            item.getElement().classList.remove("widget-selected");
          }
        });
      });

      this.trash.nativeElement.addEventListener("mouseenter", () => this.onTrash = true);
      this.trash.nativeElement.addEventListener("mouseleave", () => this.onTrash = false);
    }

    this.showAvailableWidgets = false;
    this.grid.refreshItems().layout();
  }

  /**
   * @description Saves the grid layout in the UserSettings of the current user
   * @param {boolean} force   - Whether to save regardless of having differences or not
   */
  private async saveLayout(force: boolean = false) {
    const deletedItems = this.grid.getItems().filter(i => !i.isActive());

    if (deletedItems.length) {
      // perma delete
      this._removeItems(deletedItems);

      // update ids of remaining widgets
      this.widgets.forEach((w, idx) => {
        let item = this.grid.getItems().find(i => i.getElement().getAttribute("sort-id") === w.id);
        if (item) {
          item.getElement().setAttribute("sort-id", idx.toString());
        }
        w.id = idx.toString();
      });
    }

    // save
    const itemIds = this.grid.getItems().map(item => item.getElement().getAttribute("sort-id"));
    this.layout = itemIds.filter(id => id !== undefined);
    window.localStorage.setItem("layout", JSON.stringify(this.layout));
    window.localStorage.setItem("widgets", JSON.stringify(this.widgets));
  }

  /**
   * Dynamically loads the grid's widget components and sorts them based on their position in the grid layout
   */
  private async loadWidgets() {
    this.loading = true;
    this.widgets
      .sort((a, b) => {
        let a_idx = this.layout.findIndex(v => v === a.id);
        let b_idx = this.layout.findIndex(v => v === b.id);
        return a_idx - b_idx;
      })
      .forEach(widgetData => {
        this._createWidget(widgetData);
        let w = this.hostElement.nativeElement.querySelectorAll(".widget");
        this._addWidgetToGrid(w[w.length - 1], widgetData.id);
      });
    await HelperService.sleep(100);
    this.grid.refreshItems().layout();
    this.loading = false;
  }

  /**
   * Discards any changes done to the grid since the last saveLayout call
   */
  public resetLayout() {
    // remove items added during this edit phase
    const addedItems = this.grid.getItems().filter(item => this.tmpItems.includes(item.getElement().getAttribute("sort-id")));
    this._removeItems(addedItems);


    // add items removed during this edit phase
    const deletedItems = this.grid.getItems().filter(i => !i.isActive());
    this.grid.show(deletedItems);
    deletedItems.forEach(item => item._isActive = true);

    // re-sort items like they where before this edit phase
    if (this.layout) {
      this.applyLayout("ease");
    }

    this.editLayout(false, false);
  }

  /**
   * @description Sorts the widgets based on the last saved layout
   * @param {string} sort - The order of the existing widgets
   */
  private applyLayout(sort: string = null) {
    const items = this.grid.getItems();
    const itemIds = items.map(item => item.getElement().getAttribute("sort-id"));

    let newItems = <any>[];
    let itemIndex = -1;

    for (let i = 0; i < this.layout.length; i++) {
      let itemId = this.layout[i];
      itemIndex = itemIds.indexOf(itemId);
      if (itemIndex !== -1) {
        newItems.push(items[itemIndex]);
      }
    }
    try {
      this.grid.sort(newItems, {layout: sort});
    } catch (err) {
      console.warn("Items could not be sorted.", err);
      if (!itemIds.filter(id => id === undefined).length) {
        this.layout = itemIds;
        console.warn("Resetting layout...");
      }
    }
  }

  /**
   * @description Marks any selected grid items to be deleted on saveLayout
   */
  public setItemsAsRemoved(element?: Element) {
    let deletedTmp;
    if (element) {
      deletedTmp = [element];
    } else {
      deletedTmp = this.gridElement.nativeElement.querySelectorAll(".widget-selected");
    }
    deletedTmp.forEach(el => el.classList.add("widget-deleted"));
    this.grid.hide(deletedTmp);
    this.grid.getItems(deletedTmp).forEach(item => {
      item._isActive = false;
    });
    this.grid.refreshItems().layout();
  }

  /**
   * @description Removes items from the grid and the corresponding elements from the html
   * @param {any} items
   */
  private _removeItems(items: any) {
    const itemIds = items.map(i => i.getElement().getAttribute("sort-id"));
    this.grid.remove(items, {removeElements: true});

    // remove them from widget array
    itemIds.forEach(id => {
      let idx = this.widgets.findIndex(i => i.id.toString() === id);
      if (idx !== -1) {
        this.widgets.splice(idx, 1);
      }
    });
  }

  /**
   * @description Creates a dynamic widget component and adds it to the grid
   * @param {IGridWidget} widgetData  - The data for the dynamic component instance
   */
  private _addItem(widgetData: IGridWidget) {
    // make grid editable
    if (!this.editable) {
      this.editLayout(true);
    }

    // init new widget
    const newWidget = {...widgetData, id: this.widgets.length.toString()};
    this.widgets.push(newWidget);
    this._createWidget(newWidget);


    // make widget part of the grid
    let w = this.hostElement.nativeElement.querySelectorAll(".widget");
    this._addWidgetToGrid(w[w.length - 1], newWidget.id);
    this.grid.refreshItems().layout(true);
  }

  /**
   * @description Initializes a dynamic component instance based on widgetData and subscribes to any events passed
   * @param {IGridWidget} widgetData  - The data for the dynamic component instance
   * @param {boolean} active          - Whether the widget can be manipulated by the user
   */
  private _createWidget(widgetData: IGridWidget, active: boolean = true) {
    const widget = this.gridHost.viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(GridWidgetComponent));
    if (widgetData.options) {
      this._setWidgetOptions(widget, widgetData.options);
    }
    widget.instance.widgetEvent.pipe(takeUntil(this._unsub$)).subscribe(async (event: IWidgetEvent) => {
      if (isDevMode()) {
        console.log(event);
      }
      this.widgetEvent.emit(event);
      if (event.type === "modifyWidgetData") {
        if (event.value.overwrite) {
          widgetData.data = event.value.data || {};
          widgetData.options = event.value.options || {};
        } else {
          widgetData.data = widgetData.data || {};
          widgetData.options = widgetData.options || {};
          Object.keys(event.value.data).forEach(property => {
            widgetData.data[property] = event.value.data[property];
          });
          Object.keys(event.value.options).forEach(property => {
            if (widget.instance.hasOwnProperty(property)) {
              widgetData.options[property] = event.value.options[property];
            }
          });
        }
        if (event.value.options) {
          this._setWidgetOptions(widget, widgetData.options);
        }
        await this.saveLayout(true);
        setTimeout(() => {
          this.grid.refreshItems().layout();
        });
      }
    });
    widget.instance.delete.pipe(takeUntil(this._unsub$)).subscribe((el) => {
      el.classList.add("widget-deleted");
      this.grid.hide([el]);
      this.grid.getItems([el]).forEach(item => {
        item._isActive = false;
      });
      this.grid.refreshItems().layout();
    });
    if (!active) {
      widget.instance.class += ' widget-inactive';
      widget.instance.active = false;
    }
    widget.instance.loadComponent(widgetData);
  }

  /**
   * @description adds the specified widget to the grid
   * @param {any} widget  - The widget to be added
   * @param {string} id   - The sort-id of the widget in the grid layout
   */
  private _addWidgetToGrid(widget: any, id: string) {
    widget.setAttribute("sort-id", id.toString());
    if (this.editable) {
      this.tmpItems.push(id.toString());
      this._makeWidgetEditable(widget);
    }
    this.grid.add([widget]);
  }

  /**
   * @description makes the widget able to be manipulated by the user and sets it to editable state
   * @param {any} el  - The target html element of the widget
   */
  private _makeWidgetEditable(el: any) {
    el.classList.add("widget-edit");
    this.ds.addSelectables([el]);

    el.addEventListener("mousedown", (e) => {
      e.preventDefault();
      this.ds.break();
    });
    el.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.ds.break();
    });
    el.addEventListener("dblclick", (e) => {
      e.preventDefault();
      if (el.classList.contains("widget-selected")) {
        el.classList.remove("widget-selected");
      } else {
        el.classList.add("widget-selected");
      }
    });
    el.addEventListener("click", (e) => this._selectWidgetEvent(e, el));
    el.addEventListener("touchend", (e) => this._selectWidgetEvent(e, el));
  }

  /**
   * @description makes the widget unable to be manipulated by the user and removes its editable state
   * @param {any} el  - The target html element of the widget
   */
  private _makeWidgetUneditable(el: any) {
    el.classList.remove("widget-edit", "widget-selected", "widget-deleted");
    this.ds.removeSelectables([el]);
    el.removeAllListeners("dblclick");
    el.removeAllListeners("click");
    el.removeAllListeners("touchend");
    el.removeAllListeners("mousedown");
    el.removeAllListeners("touchstart");

  }

  /**
   * @description sets the options as inputs for the selected widget
   * @param widget    - The widget instance
   * @param options   - The widget options
   * @private
   */
  private _setWidgetOptions(widget: ComponentRef<GridWidgetComponent>, options: IGridWidgetOptions) {
    Object.keys(options).forEach(property => {
      if (widget.instance.hasOwnProperty(property)) {
        widget.instance[property] = options[property];
      }
    });
  }

  /**
   * @description if the grid is in an editable state, marks every widget as selected
   */
  public selectAll() {
    if (this.editable) {
      this.grid.getItems().forEach(item => item.getElement().classList.add("widget-selected"));
    }
  }

  /**
   * @description Makes all widgets of the static Muuri grid of the menu to appear
   */
  public showAvailable() {
    this._loadAvailableWidgets();
    this.showAvailableWidgets = true;
    setTimeout(() => {
      this.availableWidgetsGrid.refreshItems().layout();
    }, 300);
  }

  /**
   * @description Makes all widgets of the static Muuri grid of the menu to disappear
   */
  public hideAvailable() {
    this.showAvailableWidgets = false;
    this.availableWidgetsGrid.remove(this.availableWidgetsGrid.getItems(), {removeElements: true});
  }

  /**
   * Getter for editable
   */
  public isEditable() {
    return this.editable;
  }

  /**
   * Getter for the items set as inactive in the grid
   */
  public get deletedItems() {
    return this.grid.getItems().filter(i => !i.isActive());
  }

  /**
   * @description Enables keyboard shortcuts for keyup event
   * @param evt
   * @private
   */
  private _keyShortcuts(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    switch (evt.code) {
      case "Delete":
        this.setItemsAsRemoved();
        break;
      case "KeyA":
        if (evt.ctrlKey) {
          this.selectAll();
        }
    }
  }

  private _selectWidgetEvent(e, el) {
    e.preventDefault();
    e.stopPropagation();
    if (e.ctrlKey) {
      if (el.classList.contains("widget-selected")) {
        el.classList.remove("widget-selected");
      } else {
        el.classList.add("widget-selected");
      }
    } else if (e.shiftKey) {
      if (el.classList.contains("widget-selected")) {
        el.classList.remove("widget-selected");
      } else {
        let prev = el;
        let toMark = [];
        let shouldMark = false;
        while (prev) {
          if (!prev.classList.contains("widget-selected")) {
            toMark.push(prev);
          } else {
            shouldMark = true;
            break;
          }
          prev = prev.previousElementSibling;
        }
        if (shouldMark) {
          toMark.forEach(w => w.classList.add("widget-selected"));
        } else {
          prev = toMark[0];
          toMark = [];
          while (prev) {
            if (!prev.classList.contains("widget-selected")) {
              toMark.push(prev);
            } else {
              shouldMark = true;
              break;
            }
            prev = prev.nextElementSibling;
          }
          if (shouldMark) {
            toMark.forEach(w => w.classList.add("widget-selected"));
          } else {
            toMark[0].classList.add("widget-selected");
          }
        }
      }
    }
  }

}
