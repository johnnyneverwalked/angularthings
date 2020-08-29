import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './chat-view.component';
import {Route, RouterModule} from "@angular/router";
import {ButtonModule} from "../../components/button/button.module";
import {ChatService} from "../../services/http/chat.service";
import {UserInfoModule} from "../../components/user-info/user-info.module";

const routes: Route[] = [
  {
    path: "",
    component: ChatViewComponent
  },
  {
    path: "full",
    loadChildren: () => import("../../components/chat/chat.module").then(m => m.ChatModule)
  }
];

@NgModule({
  declarations: [ChatViewComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ButtonModule,
    UserInfoModule
  ],
  providers: [ChatService]
})
export class ChatViewModule { }
