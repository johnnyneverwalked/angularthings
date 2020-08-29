import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ChatComponent} from "./chat.component";
import {ChatHeaderComponent} from "./components/chat-header/chat-header.component";
import {ChatFooterComponent} from "./components/chat-footer/chat-footer.component";
import {ChatBodyComponent} from "./components/chat-body/chat-body.component";
import {UserInfoModule} from "../user-info/user-info.module";
import {ButtonModule} from "../button/button.module";
import {LoaderModule} from "../loader/loader.module";
import {ModalModule} from "../modal/modal.module";
import {NgPipesModule} from "ngx-pipes";
import {ChatContainerComponent} from "./components/chat-container/chat-container.component";
import {NgbDropdownModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {ChatFacade} from "../../reducers/chat/chat.facade";
import {FullChatContainerComponent} from "./components/full-chat-container/full-chat-container.component";
import {RouterModule, Routes} from "@angular/router";
import {ChatMessageSeenComponent} from "./components/chat-message-seen/chat-message-seen.component";
import {MessageHasSeenPipe} from "./pipes/message-has-seen.pipe";
import {MomentModule} from "ngx-moment";
import {UnseenMessagesPipe} from './pipes/unseen-messages.pipe';
import {GravatarImageModule} from "../gravatar-image/gravatar-image.module";
import {ChatListComponent} from './components/chat-list/chat-list.component';
import {PipesModule} from "../../pipes/pipes.module";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
    {
        path: "topic/:topic",
        component: FullChatContainerComponent,
        data: {
            breadcrumb: "Topics",
        }
    }
];


@NgModule({
    declarations: [
        ChatComponent,
        ChatHeaderComponent,
        ChatFooterComponent,
        ChatBodyComponent,
        ChatContainerComponent,
        FullChatContainerComponent,
        ChatMessageSeenComponent,
        MessageHasSeenPipe,
        UnseenMessagesPipe,
        ChatListComponent
    ],
  imports: [
    CommonModule,
    UserInfoModule,
    ButtonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    ModalModule,
    NgPipesModule,
    NgbDropdownModule,
    NgbTooltipModule,
    MomentModule,
    GravatarImageModule,
    UserInfoModule,
    PipesModule,
    FormsModule
  ],
    exports: [
        ChatComponent,
        ChatContainerComponent,
        ChatListComponent
    ],
    providers: [
        ChatFacade
    ]
})
export class ChatModule {
}
