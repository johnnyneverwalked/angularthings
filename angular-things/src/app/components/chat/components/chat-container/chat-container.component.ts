import {AfterContentInit, Component, Input, OnDestroy, QueryList, ViewChildren} from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";
import {StoredChats} from "../../../../interfaces/IChat";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {NgbDropdownConfig} from "@ng-bootstrap/ng-bootstrap";
import {ChatComponent} from "../../chat.component";
import {SiteService} from "../../../../services/site.service";

@Component({
    selector: 'app-chat-container',
    templateUrl: './chat-container.component.html',
    styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements AfterContentInit, OnDestroy {

    private readonly maxDefault = 5;

    @Input() set maxVisible (num: number) {
        if (num < 1 || num > this.maxDefault) {
            return;
        }
        this.maxChats = num;
        this._calcMaxVisible();
    }

    public activeChats = [];

    public maxChats: number = 3;

    private _unsub$: Subject<void> = new Subject<void>();

    @ViewChildren("chat") chats: QueryList<ChatComponent>;

    constructor(
        private storage: LocalStorageService,
        public site: SiteService,
        public config: NgbDropdownConfig
    ) {
    }

    ngAfterContentInit(): void {
        this.activeChats = (this.storage.retrieve(StoredChats) || []).filter(chat => !chat.static);
        this._calcMaxVisible();

        this.storage.observe(StoredChats).pipe(takeUntil(this._unsub$)).subscribe((rooms: any) => {
            this._calcMaxVisible();
            this.activeChats = (rooms || []).filter(chat => !chat.static).map((chat, i) => {
                if (chat.newMessage && i < this.maxChats) {
                    delete chat.newMessage;
                }
                return chat;
            });
        });
    }

    ngOnDestroy(): void {
        this._unsub$.next();
    }

    private _calcMaxVisible() {
        let maxChats = Math.max(Math.floor((document.documentElement.offsetWidth - 50) / 300), 1);
        this.maxChats = Math.min(this.maxDefault, isNaN(maxChats) ? 1 : maxChats);
    }

    showChat(index: number) {
        this.activeChats.unshift(...this.activeChats.splice(index, 1));
        this.markAsRead(index);
        this._calcMaxVisible();
        setTimeout(() => this.chats?.toArray()[0]?.body?.scrollToBottom(true));
    }

    closeChat(evt, index: number) {
        evt.stopPropagation();
        this.chats?.toArray()[index]?.closeChat();
    }

    markAsRead(index: number) {
        if (this.activeChats[index]?.newMessage) {
            delete this.activeChats[index].newMessage;
        }
    }
}
