import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {fadeIn} from "./animations/enter-leave.animation";
import {UserFacade} from "./reducers/user/user.facade";
import {CURRENT_USER_ID} from "./interfaces/IUser";
import {LocalStorageService} from "ngx-webstorage";
import {StoredChats} from "./interfaces/IChat";

@Component({
  selector: 'things-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeIn
  ]
})
export class AppComponent implements OnInit{
  title = 'angular-things';

  public enableGradient: boolean;
  public menuOpen: boolean;

  public menu: {path: string; name: string; icon: string, params?: any}[] = [
    {path: "/tour-guide", name: "Tour Guide", icon: "la-map-signs", params: {tourguide: true}},
    {path: "/grid", name: "Widget Grid", icon: "la-cubes"},
    {path: "/chat", name: "Chat", icon: "la-comments"}
  ];

  constructor(
    private router: Router,
    private userFacade: UserFacade,
    private storage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.router.navigate(["/home"]);
    this.userFacade.load(CURRENT_USER_ID);
    // this.storage.store(StoredChats, []);
  }

}
