import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "./components/button/button.module";
import {TourGuideViewModule} from "./pages/tour-guide-view/tour-guide-view.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GridViewModule} from "./pages/grid-view/grid-view.module";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {ChatViewModule} from "./pages/chat-view/chat-view.module";
import {StoreModule} from "@ngrx/store";
import {initChatReducer} from "./reducers/chat/chat.reducer";
import {initUserReducer} from "./reducers/user/user.reducer";
import {ChatModule} from "./components/chat/chat.module";
import {LocalStorageService, NgxWebstorageModule} from "ngx-webstorage";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      user: initUserReducer,
      chats: initChatReducer,
    }, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
    ButtonModule,
    NgbTooltipModule,
    TourGuideViewModule,
    GridViewModule,
    ChatViewModule,
    ChatModule,
    NgxWebstorageModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
