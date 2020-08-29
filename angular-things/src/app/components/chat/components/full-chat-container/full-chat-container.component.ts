import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {ChatFacade} from "../../../../reducers/chat/chat.facade";
import {IChat, IChatWithUnseen} from "../../../../interfaces/IChat";
import {ChatHelperService} from "../../../../services/chat-helper.service";
import {SiteService} from "../../../../services/site.service";

@Component({
    selector: 'app-full-chat-container',
    templateUrl: './full-chat-container.component.html',
    styleUrls: ['./full-chat-container.component.scss']
})
export class FullChatContainerComponent implements OnInit, OnDestroy, AfterViewInit {

    public topic: string;
    public userChats: IChatWithUnseen[];

    public height: number;
    public search: string;


    private _unsub$: Subject<void> = new Subject<void>();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private chatFacade: ChatFacade,
        public site: SiteService,
        public chatHelper: ChatHelperService,
    ) {
    }

    ngOnInit(): void {
        this.site.showChatContainer.next(false);
        this.route.params.pipe(takeUntil(this._unsub$)).subscribe((params: any) => {
            this.topic = params.topic;
        });
        this.chatFacade.data.pipe(takeUntil(this._unsub$)).subscribe((val: IChat[]) => {
            this.userChats = val.map(c => ({...c, name: this.chatHelper.chatName(c)}));
        });
    }

    ngAfterViewInit(): void {
        this.height = document.documentElement.offsetHeight - 100;
    }

    ngOnDestroy(): void {
        this._unsub$.next();
        this.chatHelper.deactivateChat(this.topic);
        this.site.showChatContainer.next(true);
    }

    changeTopic(chat: IChat) {
        if (this.topic !== chat.topic) {
            this.router.navigate(['/chat', 'full', 'topic', chat.topic]);
        }
    }

}
