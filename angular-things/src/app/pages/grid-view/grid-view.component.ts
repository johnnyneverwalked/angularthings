import {Component, ViewChild} from '@angular/core';
import {TourGuideComponent} from "../../components/tour-guide/tour-guide.component";
import {GridComponent} from "../../components/grid/grid.component";
import {ITourGuideStep} from "../../interfaces/ITourGuide";

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent {

  public tourGuideSteps: ITourGuideStep[] = [];
  public canEditSteps: boolean = true;

  @ViewChild("grid") grid: GridComponent;
  @ViewChild("guide") private guide: TourGuideComponent;

  constructor() { }

  public startTour() {
    this.tourSteps();
    setTimeout(() => {
      this.guide.startTour();
    });
  }

  public tourSteps(): void {
    this.tourGuideSteps = [
      {
        title: "Grid Demo",
        text: "A step by step guide on how to use the grid and add widgets. " +
          "Grid uses the Muuri layout engine as its base, but it extends its functionality to support dynamic widgets." +
          " For this reason any component can become a widget since Grid creates them dynamically at runtime using Angular's ComponentFactory. " +
          "For the demo, I've created three simple widgets to demonstrate this feature."
      },
      {
        id: "gear-button",
        title: "Show settings",
        text: "This button toggles the edit view of the grid, showing the relevant options and the drag area where widgets are placed. (The button is disabled while the tour is on. Please go to the next step)",
        disabledStep: true,
        onBefore: () => {
          this.grid.editLayout(false, false);
        }
      },
      {
        id: "grid-add-widget",
        title: "Adding a widget",
        text: "Here exist all the available widgets one can add to the grid. Using those you can create a dynamic dashboard unique to you.",
        disabledStep: true,
        onBefore: () => {
          this.grid.editLayout(true, false);
        }
      },
      {
        id: "grid-available-widgets",
        title: "Menu widget",
        text: "Try dragging some widgets to the drag area! After that you can continue to the next step",
        onPrev: () => {
          this.grid.hideAvailable();
        },
        onNext: () => {
          this.grid.hideAvailable();
        },
        onBefore: () => {
          this.grid.showAvailable();
        }
      },
      {
        id: "grid-main-template",
        title: "Drag area",
        text: "Here you can change the widget's positions by dragging and dropping, or delete them. See the shortcuts after the tour to get the basic idea."
      },
      {
        id: "recycle-bin",
        title: "Delete a widget",
        text: "Here you can drag widgets to delete them. Otherwise you can just click on the small bin icon on each widget or press Delete after selecting some widgets. Don't worry they are not permanently deleted until you save your changes.",
        onBefore: () => {
          this.grid.editLayout(true, false);
        }
      },
      {
        id: "save-button",
        title: "Save changes",
        text: "After you finish, you can save your changes permanently. Otherwise you can press cancel to revert them.",
        disabledStep: true
      }
    ];
  }

  public tourEnd(): void {
    this.grid.resetLayout();
  }

}
