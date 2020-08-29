import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {ChatType, IChat} from "../../../../interfaces/IChat";
import {SiteService} from "../../../../services/site.service";
import {ChatHelperService} from "../../../../services/chat-helper.service";

@Component({
    selector: "app-chat-header",
    templateUrl: "./chat-header.component.html",
    styleUrls: ["./chat-header.component.scss"]
})
export class ChatHeaderComponent implements OnInit {

    public readonly chatTypes = ChatType;

    @Input() chat: IChat;
    @Input() color: string = "bg-primary";
    @Input() aspect: "mini" | "full" = "mini";
    @Input() static: boolean = false;
    @Input() restrictions: boolean = false;
    @Input() unseenMessages: number = 0;
    @Input() self: string;

    @Output() minimize = new EventEmitter();
    @Output() close = new EventEmitter();
    @Output() tryToJoin = new EventEmitter();

    @ViewChild("header", {static: false}) header: ElementRef;

    constructor(
        private site: SiteService,
        public chatHelper: ChatHelperService,
    ) {
    }

    ngOnInit() {
    }

    public get receiver() {
        return this.chat.subscribers.length > 1
            ? this.chat.subscribers
                .find(sub => (sub.user?._id || sub.user) !== this.site.currentUser._id)?.user
            : this.site.currentUser;
    }

    public get headerTitle() {
        const maxLength = (this.header?.nativeElement?.offsetWidth * 0.6 / 10 || 20);
        let header = this.chatHelper.chatName(this.chat);
        return header.length > maxLength ? `${header.slice(0, maxLength - 2)}...` : header;
    }

    // toggleOptions(evt, mode: "action"|"info"|"settings" = "settings") {
    //     evt?.stopPropagation();
    //     this.site.chatModal.show(this.chat, mode);
    // }

    get showMenu() {
        return !this.static || this.chat?.subscribers.some(s => (s.user?._id || s.user) === this.self && s.active);
    }

}
