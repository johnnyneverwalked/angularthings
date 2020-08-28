import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TourGuideComponent} from "./tour-guide.component";
import {ButtonModule} from "../button/button.module";
import {TourGuideDirective} from "../../directives/tour-guide/tour-guide.directive";
import {ModalModule} from "../modal/modal.module";

@NgModule({
    exports: [
        TourGuideComponent,
        TourGuideDirective
    ],
    imports: [
        CommonModule,
        ButtonModule,
        ModalModule,
    ],
    declarations: [
        TourGuideComponent,
        TourGuideDirective
    ]
})
export class TourGuideModule {}
