# grid


### Description
A grid of draggable items

***

### Inputs
  
* enableEdit: `boolean` (default= `true`)
  * If the grid can be edited (renders the edit menu)
  
* enableDrag: `boolean` (default= `true`)
  * If the items can be dragged. (If `enableEdit` is true, drag is enabled only in edit mode). 

* dragSortInterval: `number` (default= `100`)
  * Defines the amount of time the items must be still before moving
   while an item is dragged over them. (`0` seems more fluid but it is 
   pretty heavy if the grid contains many items).

* items: `NodeList`
  * A list of the items for the grid.

* itemSelector: `string`
  * A `querySelector` of the items for the grid. (Takes precedent over `items`).

* alignRight: `boolean` (default= `false`)
  * When `true` the items are aligned from right to left.

* alignBottom: `boolean` (default= `false`)
  * When `true` the items are aligned from the bottom up.

* horizontal: `boolean` (default= `false`)
  * When `true` the grid works in landscape mode (grid expands to the right).
  
Notes: 
* `items` and `itemSelector`: 
   * These should be used with static grids. `enableEdit` on a grid with initial items breaks save/load/reset
so if it is set to `true` the grid will ignore `items` and `itemSelector`.
   * If there is a saved layout it will not be applied.
   * `items` elements will be appended to the grid as children

* `items` markup: 
    * Grid items must always consist of at least two elements. The outer element is used for 
positioning the item and the inner element (first direct child) is used for animating the item's visibility 
(show/hide methods). You can insert any markup you wish inside the inner item element.
(`<grid-widget>` does this by default)
 ```
 <div class="item">
    <div class="item-content">
      <!-- Enter your content here -->
    </div>
  </div>
```

* `items` styles:
    * The `item` elements must have their CSS `position` set to `absolute` and their `display` property set to `block`.
    * The `item` elements must not have any CSS transitions or animations applied to them.
```
    .item {
      display: block;
      position: absolute;
      z-index: 1;
    }
    .item.muuri-item-dragging {
      z-index: 3;
    }
    .item.muuri-item-releasing {
      z-index: 2;
    }
    .item.muuri-item-hidden {
      z-index: 0;
    }
    .item-content {
      position: relative;
      width: 100%;
      height: 100%;
    }
```    

For more information on how the grid works see Muuri's [documentation](https://github.com/haltu/muuri).

***

### Outputs
* widgetEvent: Emits every `grid-widget`'s `widgetEvent`.
    * type: `string`. (e.g. "click")
    * value: `any`. the emitted event's value


`widgetEvent` Example:

.html

```
<app-grid (widgetEvent)="catchEvent($event)"></app-grid>
    
```
.ts

```
...
// If this grid has a widget with a (btnClick) event and a widget with a (slide) event

catchEvent(event) {
    switch: event.type {
        case "btnClick": {
            // do stuff
            break;
        }
        case "slide": {
            // do other stuff
            break;
        }
    }
}
...
    
```

### Special Events

* modifyWidgetData: `EventEmitter<IWidgetModification>`
    * This event should be set in the widget's main component (The one dynamically created inside the `grid-widget`).
    This event allows widget to internally change the otherwise static properties that are given to it on creation,
    during `loadWidgets` or `createWidget`. When emitted if the component exists inside a grid the grid will catch this event,
    set the emitted properties of the `GridWidget` object, finally invoking `saveLayout` to save the changes to the DB.
    Note that the actual output name must be set to "modifyWidgetData" in order for it to be recognised by the grid.
    
    * `data` property of the event sets the components inputs while `options` sets the `grid-widget` options
    Most likely you'll want to change the widget size, which can happen by passing a `options.class` to the event.
    Some examples are `widget-sm`, `widget-md` and `widget-lg`.
    

