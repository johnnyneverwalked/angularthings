import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourGuideViewComponent } from './tour-guide-view.component';
import {Route, RouterModule} from "@angular/router";
import {ButtonModule} from "../../components/button/button.module";
import {TourGuideModule} from "../../components/tour-guide/tour-guide.module";
import {ScrollToService} from "@nicky-lenaers/ngx-scroll-to";

const routes: Route[] = [
  {
    path: "",
    component: TourGuideViewComponent
  }
]

@NgModule({
  declarations: [TourGuideViewComponent],
  imports: [
    CommonModule,
    TourGuideModule,
    RouterModule.forChild(routes),
    ButtonModule
  ],
  exports: [RouterModule],
  providers: [ScrollToService]
})
export class TourGuideViewModule { }
