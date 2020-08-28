import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "./components/button/button.module";
import {TourGuideViewModule} from "./pages/tour-guide-view/tour-guide-view.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GridViewModule} from "./pages/grid-view/grid-view.module";
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TourGuideViewModule,
    GridViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
