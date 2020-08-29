import {Component, OnInit} from '@angular/core';
import {ITourGuideStep} from "../../interfaces/ITourGuide";

@Component({
  selector: 'app-tour-guide-view',
  templateUrl: './tour-guide-view.component.html',
  styleUrls: ['./tour-guide-view.component.scss']
})
export class TourGuideViewComponent {

  showStep5: boolean = false;
  tourSteps: ITourGuideStep[] = [
    {
      title: "Tour Guide Demo",
      text: "This is a demo for the TourGuide Component. In dev mode you can change the inputs on the fly from the menu" +
        " on the bottom right of the screen. TourGuide is not a wrapper for an existing library. " +
        "It is a feature developed from scratch."
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
      title: "Dynamic text support",
      text: "Although it is not present in this demo, querying messages by using the dbId property, you can easily setup dynamic step contents from a database/API",
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
      id: "step8",
      title: "Events",
      text: "When the tour starts, ends or the page is changed, an event is emitted with relevant information of the TourGuide's " +
        "state at the time. Also by adding the 'tourguide=true' param in the url for a page that contains a TourGuide component, the tour will start automatically." +
        " This is very useful if you wish to link TourGuides in different pages together to form a big tour."
    },
    {
      id: "step9",
      title: "Demo end",
      text: " \"<i>People want guidance, not rhetoric. They need to know what the plan of action is, and how it will be implemented. They want to be given responsibility to help solve the problem and authority to act on it.</i>\" \n \n ~ Howard Schultz"
    }
  ];

  constructor() {
  }


  public doStuffOnTourEnd(evt) {
    // When the tour ends it fires an event with some info regarding its state at the time
    // Use this event to add logic to the end of the tour.

    console.log(evt);
    this.showStep5 = false;
  }

}
