import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from "@angular/core";
import {IChatMessageViewSeen} from "../../../../interfaces/IChat";
import {SiteService} from "../../../../services/site.service";

@Component({
    selector: "app-chat-message-seen",
    templateUrl: "./chat-message-seen.component.html",
    styleUrls: ["./chat-message-seen.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageSeenComponent implements OnInit {

    @Input("messageSeen") set setMessageSeen(messageSeen: IChatMessageViewSeen[]) {
        this.messageSeen = messageSeen;
        this.cd.markForCheck();
    }
    public messageSeen: IChatMessageViewSeen[];
    @Input() showNotYet: boolean[] = [false, true];

    constructor(public site: SiteService,
                private cd: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }

}
