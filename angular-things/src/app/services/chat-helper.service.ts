/**
 *Made with <3 by C.R.U.D. at 11/10/2019
 */
import {Injectable} from "@angular/core";
import {ChatActionKind, ChatActionType, ChatColors, ChatType, IChat, IChatMessage, IChatMessageAction, IChatUser, StoredChats} from "../interfaces/IChat";
import {CURRENT_USER_ID, IUser} from "../interfaces/IUser";
import {uniqBy} from "lodash";
import {LocalStorageService} from "ngx-webstorage";
import {ChatService} from "./http/chat.service";

@Injectable({providedIn: "root"})
export class ChatHelperService {


    constructor(
        public chatService: ChatService,
        private storage: LocalStorageService
    ) {
    }

    initChat(user: string | any | IUser) {
        let me = CURRENT_USER_ID;
        if (!(me && (user?._id || typeof user === "string")) || (user._id || user) === me) {
            return;
        }

        this.storage.store(StoredChats, uniqBy([
            {topic: `chat-direct-${[me, (user._id || user)].sort().join("-")}`, subs: [me, (user._id || user), 2]},
            ...(this.storage.retrieve(StoredChats) || [])
        ], "topic"));
    }

    activateChat(chat: IChat, isStatic: boolean = false) {
        this.storage.store(StoredChats, uniqBy([
            {
                topic: chat.topic,
                name: this.chatName(chat),
                subs: [
                    ...(chat.subscribers || []).map(s => s.user?._id || s.user).splice(0, 3),
                    chat.subscribers.length
                ],
                static: isStatic
            },
            ...(this.storage.retrieve(StoredChats) || [])
        ], "topic"));
    }

    deactivateChat(topic: string) {
        this.storage.store(StoredChats, (this.storage.retrieve(StoredChats) || []).filter(c => c.topic !== topic));
    }

    chatName(chat: IChat) {
        if (chat.name) {
            return chat.name;
        }

        switch (chat.type) {
            case ChatType.Direct:
                const user = (chat.subscribers.find(s => (s.user?._id || s.user) !== CURRENT_USER_ID)
                    || chat.subscribers[0]
                )?.user;
                return user ? `${user.firstName} ${user.lastName}`
                    : chat.topic.split("-").splice(0, 2).join("-");
            case ChatType.Generic:
                let name = chat.topic.split("-");
                name.pop();
                return name.join("-");
            default:
                return chat.topic.split("-").splice(0, 2).join("-");
        }
    }

    isActionLegal(action: Partial<IChatMessageAction>): boolean {

        if (!action) {
            return false;
        }

        if (action.type && !Object.values(ChatActionType).includes((<any>action.type)?._id || action.type)) {
            return false;
        }

        switch (action.kind) {
            case ChatActionKind.MultipleChoice:
                return !!action.data?.multiChoiceOptions?.length;
            case ChatActionKind.Button:
            case ChatActionKind.Question:
                return true;
            default:
                return false;
        }
    }

    public messageSeenBy(message: IChatMessage, userId: string, viewSeen: boolean = false): boolean {
        if (message.sender === userId) { return true; }
        if (!viewSeen) {
            return message.seen?.some(seen => (seen.user?._id || seen.user) === userId);
        } else {
            return message.viewSeen?.some(seen => (seen.user?._id || seen.user) === userId);
        }
    }

    public userInChatSubscribers(subscribers: IChatUser[], userId: string): boolean {
        return subscribers.some(sub => (sub.user?._id || sub.user) === userId);
    }

    get colors() {
        return ChatColors;
    }

    get types() {
        return ChatType;
    }

    get actionKindAndType() {
        return {
            type: ChatActionType,
            kind: ChatActionKind
        };
    }

    get selections() {
        return {
            type: [
                {_id: ChatActionType.Amount, name: "Ποσό", inputType: "number"},
            ],
            kind: [
                {_id: ChatActionKind.Button, name: "Κουμπί"},
                {_id: ChatActionKind.Question, name: "Ερώτηση (αποδοχή / απόρριψη)"},
                {_id: ChatActionKind.MultipleChoice, name: "Πολλαπλή επιλογή"}
            ]
        };
    }

    get autoResponse(): string {
      const responses = [
        "Oh really?",
        "You don't say!",
        "Aha... I see...",
        "That's mighty interesting.",
        "If you had a truck, what would you put in it?",
        "I see your point...",
        "We can agree to disagree",
        "Cool!",
        "How about the opposite though?",
        "You should patent that!",
        "Ha ha! Nice!"
      ]
      return responses[Math.floor(Math.random() * responses.length)];
    }

}
