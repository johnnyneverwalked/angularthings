import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {IChat, IChatMessage} from "../../../../interfaces/IChat";
import {ChatHelperService} from "../../../../services/chat-helper.service";
import {SiteService} from "../../../../services/site.service";

@Component({
    selector: 'app-chat-footer',
    templateUrl: './chat-footer.component.html',
    styleUrls: ['./chat-footer.component.scss']
})
export class ChatFooterComponent {

    @Input() chat: IChat;
    @Input() width: number = 300;
    @Input() aspect: "mini" | "full" = "mini";
    @Input() self: string;


    @Output() send: EventEmitter<Partial<IChatMessage>> = new EventEmitter<Partial<IChatMessage>>();
    @Output() startedTyping = new EventEmitter();
    @Output() focusText = new EventEmitter();

    public message: string;
    public visibleMenu: boolean;

    private _cols: number = 29;

    @ViewChild("footer", {static: false}) footer: ElementRef;
    @ViewChild("textContainer", {static: false}) textContainer: ElementRef;

    constructor(
        public chatHelper: ChatHelperService,
        public site: SiteService
    ) {
    }

    public get rows() {
        const rows = this.message
            ? Math.ceil((Math.max(this.message.split("\n").length * this.cols, this.message.length)) / this.cols)
            : 1;
        const maxRows = this.visibleMenu ? 3 : 5;
        return rows > maxRows ? maxRows : rows;
    }

    public get cols() {
        return this._cols;
    }

    public sendMessage(evt?: KeyboardEvent) {
        this._cols = Math.floor(this.textContainer?.nativeElement.offsetWidth / 8 || 29);
        if (evt && (evt.key !== "Enter" || evt.shiftKey)) {
            this.startedTyping.emit();
            return;
        }

        evt?.preventDefault();

        // if (this.chat.activeAction?.message) {
        //     this.message = this.chat.activeAction.message;
        // }
        // if (!(this.message?.trim()?.length || this.chatHelper.isActionLegal(this.chat.activeAction))) {
        //     return;
        // }

        let msg: Partial<IChatMessage> = {
            content: this.message?.trim(),
        };
        if (!msg.content?.length) {
          return;
        }
        // if (this.chatHelper.isActionLegal(this.chat.activeAction)) {
        //     if (this.chat.activeAction.receiver) {
        //         msg.receiver = this.chat.activeAction.receiver;
        //         delete this.chat.activeAction.receiver;
        //     }
        //     msg.action = {
        //         ...cloneDeep(this.chat.activeAction),
        //         type: this.chat.activeAction.type?._id || this.chat.activeAction.type
        //     };
        //     if (msg.action.data?.multiChoiceOptions?.length) {
        //         msg.action.data.multiChoiceOptions = msg.action.data.multiChoiceOptions.map((c: any) => {
        //             if (!c?.content) {
        //                 return c?.name;
        //             }
        //             return c;
        //         });
        //     }
        //
        // }

        this.send.emit(msg);
        this.message = null;


    }

    public onFocusText() {
        this.focusText.emit();
    }

}
