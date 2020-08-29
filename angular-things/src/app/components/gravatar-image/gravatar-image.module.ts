import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GravatarImageComponent} from "./gravatar-image.component";
import {GravatarModule} from "ngx-gravatar";

@NgModule({
    exports: [
        GravatarImageComponent
    ],
    imports: [
        CommonModule,
        GravatarModule
    ],
    declarations: [GravatarImageComponent]
})
export class GravatarImageModule {
}
