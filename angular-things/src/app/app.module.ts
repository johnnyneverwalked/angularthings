import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "./components/button/button.module";
import {TourGuideViewModule} from "./pages/tour-guide-view/tour-guide-view.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TourGuideViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
