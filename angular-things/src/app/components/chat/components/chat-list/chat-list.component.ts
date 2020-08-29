import {Component, Input, OnInit} from '@angular/core';
import {IChatWithUnseen} from "../../../../interfaces/IChat";
import {ChatHelperService} from "../../../../services/chat-helper.service";
import {SiteService} from "../../../../services/site.service";

@Component({
    selector: 'app-chat-list',
    templateUrl: './chat-list.component.html',
    styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

    @Input() userChats: IChatWithUnseen[] = [];
    @Input() showViewAll: boolean;
    @Input() classes: string = "";

    constructor(
        public chatHelper: ChatHelperService,
        public site: SiteService,
    ) {
    }

    ngOnInit(): void {
    }

}
