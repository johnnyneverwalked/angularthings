import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserInfoComponent} from "./user-info.component";
import {GravatarImageModule} from "../gravatar-image/gravatar-image.module";
import {RouterModule} from "@angular/router";

@NgModule({
    exports: [
        UserInfoComponent
    ],
    imports: [
        CommonModule,
        GravatarImageModule,
        RouterModule
    ],
    declarations: [
        UserInfoComponent
    ],
})
export class UserInfoModule {
}
