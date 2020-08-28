import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'things-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-things';
  menu: {path: string; name: string; icon: string, params?: any}[] = [
    {path: "/tour-guide", name: "Tour Guide", icon: "la-map-signs", params: {tourguide: true}},
    {path: "/grid", name: "Widget Grid", icon: "la-cubes", params: {tourguide: true}}
  ];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.router.navigate(["/home"]);
  }

}
