import {Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GridHostDirective} from "../grid-host.directive";
import IGridWidget, {IWidgetEvent} from "../../../interfaces/IGridWidget";
import {UrlShortcutComponent} from "../../widgets/url-shortcut/url-shortcut.component";
import {TodoListComponent} from "../../widgets/todo-list/todo-list.component";

@Component({
  selector: 'app-grid-widget',
  templateUrl: './grid-widget.component.html',
  styleUrls: ['./grid-widget.component.scss']
})
export class GridWidgetComponent implements OnInit {
  private static componentTypes = {
    "EmptySpace": "EmptySpace",
    "UrlShortcutComponent": UrlShortcutComponent,
    "TodoListComponent": TodoListComponent
  };

  @Input() style: any = {};
  @Input() class: string = null;
  @Input() active: boolean = true;
  @Input() empty: boolean = false;

  @Output() delete = new EventEmitter();
  @Output() widgetEvent = new EventEmitter<IWidgetEvent>();

  @ViewChild(GridHostDirective, {static: true}) public gridHost: GridHostDirective;
  @ViewChild("widget", {static: true}) public widgetElement;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {

  }

  /**
   * @description Dynamically creates a component instance with the specified data
   * @param {IGridWidget} widget  -   The data to be loaded to the component
   */
  loadComponent(widget: IGridWidget) {
    const type = GridWidgetComponent.componentTypes[widget.type];
    if (type === "EmptySpace") {
      return;
    }
    if (!type) {
      throw new Error("Component <" + widget.type + "> is not a valid widget");
    }

    const viewContainerRef = this.gridHost.viewContainerRef;
    viewContainerRef.clear();

    // @ts-ignore
    let component = viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(type));
    if (widget.data) {
      Object.keys(widget.data).forEach(property => {
        component.instance[property] = widget.data[property];

      });
    }
    if (widget.output) {
      widget.output.forEach(property => {

        if (component.instance.hasOwnProperty(property)) {
          component.instance[property].subscribe(event => {
            this.widgetEvent.emit({
              type: property,
              value: event
            });
          });
        }
      });
    }
  }

}
