import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridComponent} from "./grid.component";
import {ButtonModule} from "../button/button.module";
import { GridWidgetComponent } from './grid-widget/grid-widget.component';
import {GridWidgetModule} from "./grid-widget/grid-widget.module";
import {ModalModule} from "../modal/modal.module";
import {TourGuideModule} from "../tour-guide/tour-guide.module";
import {LoaderModule} from "../loader/loader.module";

@NgModule({
    declarations: [GridComponent],
    exports: [GridComponent],
    imports: [
        CommonModule,
        ModalModule,
        GridWidgetModule,
        ButtonModule,
        TourGuideModule,
        LoaderModule,
    ],
    entryComponents: [GridWidgetComponent]
})
export class GridModule {
}
