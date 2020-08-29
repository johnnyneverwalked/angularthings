import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ActivateUrlsPipe} from "./activate-urls/activate-urls.pipe";

@NgModule({
    declarations: [
        ActivateUrlsPipe
    ],
    exports: [
        ActivateUrlsPipe,
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule {
}
