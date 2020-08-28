import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from './grid-view.component';
import {Route, RouterModule} from "@angular/router";
import {GridModule} from "../../components/grid/grid.module";
import {TourGuideModule} from "../../components/tour-guide/tour-guide.module";
import {ButtonModule} from "../../components/button/button.module";
import {ModalModule} from "../../components/modal/modal.module";


const routes: Route[] = [
  {
    path: "",
    component: GridViewComponent
  }
];


@NgModule({
  declarations: [GridViewComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        GridModule,
        TourGuideModule,
        ButtonModule,
        ModalModule
    ]
})
export class GridViewModule { }
