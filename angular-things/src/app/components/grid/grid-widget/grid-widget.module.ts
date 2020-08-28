import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridWidgetComponent} from "./grid-widget.component";
import {GridHostDirective} from "../grid-host.directive";
import {UrlShortcutComponent} from "../../widgets/url-shortcut/url-shortcut.component";
import {UrlShortcutModule} from "../../widgets/url-shortcut/url-shortcut.module";
import {TodoListModule} from "../../widgets/todo-list/todo-list.module";


@NgModule({
    declarations: [GridWidgetComponent, GridHostDirective],
    exports: [GridHostDirective],
    imports: [
        CommonModule,
        UrlShortcutModule,
        TodoListModule,
    ],
    entryComponents: [
        UrlShortcutComponent,
    ]
})
export class GridWidgetModule {
}
