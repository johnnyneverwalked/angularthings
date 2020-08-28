import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UrlShortcutComponent} from "./url-shortcut.component";
import {ButtonModule} from "../../button/button.module";
import {ModalModule} from "../../modal/modal.module";
import {ReactiveFormsModule} from "@angular/forms";
import {LoaderModule} from "../../loader/loader.module";


@NgModule({
    declarations: [UrlShortcutComponent],
    exports: [UrlShortcutComponent],
    imports: [
        CommonModule,
        ButtonModule,
        ModalModule,
        ReactiveFormsModule,
        LoaderModule,
    ]
})
export class UrlShortcutModule {
}
