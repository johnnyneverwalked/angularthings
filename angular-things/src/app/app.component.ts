import {Component} from '@angular/core';

@Component({
  selector: 'things-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-things';
  menu: {path: string; name: string; icon: string, params?: any}[] = [
    {path: "/tour-guide", name: "Tour Guide", icon: "la-map-signs", params: {tourguide: true}},
    {path: "/grid", name: "Widget Grid", icon: "la-cubes", params: {tourguide: true}}
  ]

  constructor() {
  }
}
