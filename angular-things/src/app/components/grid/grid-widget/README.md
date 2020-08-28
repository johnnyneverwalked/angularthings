# grid-widget


### Description
A specialized container for widgets that communicates with ```<app-grid>```

***

### Inputs
  
* style: `object`
  * Contains the styling for `NgStyle`
* class: `string`
  * Contains the classes for `NgClass`
* active: `boolean` (default: true)
  * Whether the widget is in an active state and can be interacted with
***

### Outputs
* delete: It is emitted when the delete button is pressed
* widgetEvent: Emits an `object` every time the contained widget emits something.
    * type: `string`. (e.g. "click")
    * value: `any`. the emitted event's value
***

### Initialization:
To initialize it simply call the `loadComponent()` method with an
`<IGridWidget>` argument. Make sure you give a valid `Component`.
Generally you can bind to any input of the widget by passing the values
in the `data` property of the argument.

Example:

```
@ViewChild("widget") private widget;
...
const <IGridWidget>widgetData = {
        type: "ButtonComponent",
        data: {
            displayName: "My Widget Button"
            action: "save"
        }
        //widgetEvent will emit {type: "btnClick" value:...} any time btnClick is emitted
        output: ["btnClick"],
        options:{
            class: "m-5 pull-right"
        } 
    }

init(){
    this.widget.loadComponent(widgetData);
}
...    
    
```
***

### Classes and attributes

Avoid using the following classes and attributes since they are internally used for `grid-widget`
manipulation.

Classes:
* `widget`
* `widget-content`
* `widget-edit`
* `widget-deleted`
* `widget-selected`
* `widget-inactive`
* `widget-moving`
* `widget-sm`
* `widget-full-w`

Attributes:
* `sort-id`
* `widget-id`

***

### Supported Components

***           

