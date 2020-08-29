import {Component, OnInit} from '@angular/core';
import {CURRENT_USER_ID, IUser} from "../../interfaces/IUser";
import {HelperService} from "../../services/helper.service";
import {ChatHelperService} from "../../services/chat-helper.service";

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {

  users: IUser[] = [];

  constructor(
    private chatHelper: ChatHelperService,
  ) {
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      let user;
      do {
        user = HelperService.generateUser();
      } while (this.users.some(u => user._id === u._id));
      this.users.push(user);
    }
  }

  chatWith(user: string) {
    this.chatHelper.initChat(user);
  }

}
