# Tour Guide


### Description
A step-by-step guide and feature tutorial-style introduction.

***

### How to use

Add `app-tour-guide` to your html, enter an array of steps as input and mark your step elements with the `tourGuide` directive.
Then use the `startTour()` method to start the tour.
 

Inputs: 
* hasBackdrop: `boolean` (default = `true`)
* hasProgressBar: `boolean` (default = `false`)
  * Whether a progress bar appears under the steps
* canSkipSteps: `boolean` (default = `true`)
  * Whether the user can go to any step at any time
* canEndTour: `boolean` (default = `true`)
  * Whether the user can end the tour before the last step
* canEditSteps: `boolean` (default = `true`)
  * Whether the user can interact with the highlighted elements of the steps 
  (can be overwritten for a step by passing `disabledStep` property)
* steps: `ITourGuideStep[]` (default = `[]`)
  * An array of steps to be used in the tour
* nextPageUrl: `string`
  * The url for the next page of the tour. (Links multiple tours together in multiple pages)
* prevPageUrl: `string`
  * The url for the previous page of the tour. (Links multiple tours together in multiple pages)
* nextPageTitle: `string`
  * The name for the next page of the tour to appear in the navigation buttons.
* prevPageTitle: `string`
  * The name for the previous page of the tour to appear in the navigation buttons.

Outputs: 
* tourEnded: `EventEmitter<ITourGuideEndEvent>`
  * Triggers when the tour ends
* tourStarted: `EventEmitter<void>`
  * Triggers when the tour starts
* pageChange: `EventEmitter<ITourGuidePageEvent>`
  * Triggers before the tour navigates to another url

***

#### TourGuide Steps
Tour guide uses an array of steps corresponding to DOM elements. 
Every target element MUST contain an `id` attribute in order for TourGuide to recognise it.
It must also be marked with the `tourGuide` directive. A step can contain the following properties:

* id?: `string`
    * The target element's id, if omitted the tooltip will appear in the center without highlighting anything.
* title?: `string`
    * The title of the tooltip
* text?: `string`
    * The text of the tooltip
* tooltipPosition?: `Position`
    * The tooltip position relative to the highlighted element. If it doesn't fit on the screen it will take
    the first (clockwise) position starting from the top, where it is fully visible.
* disabledStep?: `boolean`
    * Whether the user can interact with the highlighted element of this step
* dbId?: `string`
    * The verbal id  if the step's contents are dynamically set
* _mongoId?: `string`
    * The verbal mongo _id  if the step's contents are dynamically set. 
    It is used internally from the TourGuide, you don't have to set this.
* onNext?(): `void`
    * Method that runs before moving to the next step.
* onPrev?(): `void`
    * Method that runs before moving to the previous step.
* onBefore?(): `void`
    * Method that runs before moving to the current step.
* onAfter?(): `void`
    * Method that runs after moving to the current step.

           
### Examples
.html
```
...
<app-tour-guide #guide
                [steps]="tourSteps"
                [hasProgressBar]="true"
                (tourEnded)="doStuffOnTourEnd($event)">
</app-tour-guide>


<app-button action="view" (btnClick)="guide.startTour()"></app-button>


<div tourGuide id="step6" class="d-inline-block">
    This is the 6th step
</div>
<div tourGuide id="step2">
    This is the 2nd step
</div>
<div tourGuide id="step3">
    This is the 3rd step
    <input type="text" class="form-control">
</div>
<div tourGuide id="step4">
    This is the 4th step
    <input type="text" class="form-control">
    <app-button action="edit"></app-button>
</div>
<div tourGuide *ngIf="showStep5" id="step5">
    This is the 5th step
</div>
<div tourGuide id="step8">
    This is the 8th step
</div>
<div tourGuide id="step7">
    This is the 7th step
</div>
...
```

.ts
```
...
showStep5: boolean = false
tourSteps: ITourGuideStep[] = [
    {
        title: "Tour Guide Demo",
        text: "This is a demo for the TourGuide Component. In dev mode you can change the inputs on the fly from the menu on the top left."
    },
    {
        id: "step2",
        title: "Navigation",
        text: "You can use the keyboard for step navigation (see shortcuts on the top right). " +
            "You can also end the tour with ctrl+shift+esc regardless of the truthiness of the canEndTour input. Keep this a secret, shhh.",
        tooltipPosition: "right"
    },
    {
        id: "step3",
        dbId: "demo-readme-step3",
        tooltipPosition: "left"
    },
    {
        id: "step4",
        title: "Highlighted Step edit",
        text: "By adding the disabledStep property you can disable only the current step regardless of the canEditSteps input.",
        disabledStep: true,
        tooltipPosition: "left"
    },
    {
        id: "step5",
        title: "onNext(), onPrev(), onBefore() and onAfter()",
        text: "You can use methods to manage stuff like ngIf before or after getting to a step.",
        onNext: () => {
            this.showStep5 = false;
        },
        onPrev: () => {
            this.showStep5 = false;
        },
        onBefore: () => {
            this.showStep5 = true;
        },
    },
    {
        id: "step6",
        title: "Tooltip position",
        text: "You can position the tooltip relative to the highlighted element. If it doesn't fit it will automatically orient itself " +
            "to the first cardinal position where it fits (clockwise starting from the top).",
        tooltipPosition: "right"

    },
    {
        title: "No id FeelsBadMan :'(",
        text: "This appears in the center of the screen since it is not tied to an element.",
    },
    {
        id: "step7",
        title: "Events",
        text: "When the tour starts, ends or the page is changed, an event is emitted with relevant information of the TourGuide's " +
            "state at the time."
    },
    {
        id: "step8",
        title: "Demo end",
        text: " \"<i>People want guidance, not rhetoric. They need to know what the plan of action is, and how it will be implemented. They want to be given responsibility to help solve the problem and authority to act on it.</i>\" \n \n ~ Howard Schultz"
    }
]
...

public doStuffOnTourEnd(evt) {
    // When the tour ends it fires an event with some info regarding its state at the time
    // Use this event to add logic to the end of the tour.
    
    console.log(evt);
    this.showStep5 = false;
}

```
