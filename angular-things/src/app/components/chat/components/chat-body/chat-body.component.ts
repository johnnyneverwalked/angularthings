import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {IChat, IChatMessage} from "../../../../interfaces/IChat";
import {NavigationService} from "../../../../services/navigation/navigation.service";
import {ChatHelperService} from "../../../../services/chat-helper.service";
import {IUser} from "../../../../interfaces/IUser";
import {uniqBy} from "lodash";

@Component({
    selector: "app-chat-body",
    templateUrl: "./chat-body.component.html",
    styleUrls: ["./chat-body.component.scss"]
})
export class ChatBodyComponent {

    @Input() chat: IChat;

    @Input("messages") set setMessages(messages: IChatMessage[]) {
        if (this.hasSeen) {
            this.messages = messages.map(message => {
                const subs = this.chat.subscribers
                    .filter(sub => !this.chatHelper.messageSeenBy(message, (sub.user?._id || sub.user)) && sub.active)
                    .map(sub => ({user: sub.user, date: null, notYet: true}));

                message.viewSeen = uniqBy([
                    ...(message.seen || []).map(seen => ({...seen, notYet: false})),
                    ...subs
                ], (seen) => {
                    return seen.user?._id || seen.user;
                });
                return message;
            });
        } else {
            this.messages = messages;
        }

    }

    public messages: IChatMessage[];

    @Input() totalMessages: number = 0;

    @Input() self: string;
    @Input() superUser: boolean;
    @Input() typing: string[] = [];
    @Input() color: string = "primary";
    @Input() height: number;
    @Input() static: boolean;
    @Input() loading: boolean;

    @Input() hasSeen: boolean = false;
    @Input() showNotSeenYet: boolean = false;
    @Input() restrictions: boolean = false;

    @Output() invite = new EventEmitter<string[]>();
    @Output() loadMore = new EventEmitter<void>();
    @Output() updateMessage = new EventEmitter<{ messageId: string, options: any }>();

    @ViewChild("body", {static: false}) body: ElementRef;
    @ViewChild("messageContainer", {static: false}) messageContainer: ElementRef;

    constructor(
        private navigation: NavigationService,
        public chatHelper: ChatHelperService
    ) {
    }

    isMine(sender: any) {
        return this.self === (sender?._id || sender);
    }

    isConsequent(sender: any, sender2: any) {
        sender = (sender?._id || sender);
        sender2 = (sender2?._id || sender2);
        return sender && sender === sender2;
    }

    scrollToBottom(force: boolean = true) {
        if (force || this.messageContainer?.nativeElement.scrollHeight - this.body?.nativeElement.scrollTop < 600) {
            this.navigation.scrollTo({
                container: this.body,
                offset: this.messageContainer?.nativeElement.offsetHeight,
                duration: null
            });
        }
    }

    scrollToMessage(index: number) {
        this.navigation.scrollTo({
            container: this.body,
            target: `#${this.chat.topic}-msg-${index}`,
            duration: null
        });

    }

    loadMoreMessages() {
        if (this.body?.nativeElement.scrollTop > 5 || this.messages?.length >= this.totalMessages) {
            return;
        }

        this.loadMore.emit();
    }

    handleActionEvent(messageId: string, type: string, event?: any, receiver?: string | any | IUser) {
        switch (type) {
            case "complete":
                this._handleActionCompletion(messageId);
                break;
            case "cancel":
                this._handleActionCancelation(messageId);
                break;
            case "result":
                if (event?.user) {
                    // this.updateMessage.emit({messageId, options: {[`action.results.${event.user}`]: event.result}});
                }
        }
    }

    private async _handleActionCompletion(messageId: string) {
        const msg = this.messages.find(m => m._id === messageId);
        if (!(msg?.action)) {
            return;
        }

        // this.updateMessage.emit({messageId: msg._id, options: {"action.status": "completed"}});
    }

    private async _handleActionCancelation(messageId: string) {
        const msg = this.messages.find(m => m._id === messageId);
        if (!(msg?.action)) {
            return;
        }

      // this.updateMessage.emit({messageId, options: {"action.status": "canceled"}});
    }

    deleteMessage(message: IChatMessage) {
      this.updateMessage.emit({messageId: message._id, options: {deleted: true}});
    }

    public recalculateSeen() {
        this.setMessages = [...this.messages];
    }

}
