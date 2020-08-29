import {Pipe, PipeTransform} from "@angular/core";
import {IChat, IChatMessage} from "../../../interfaces/IChat";
import {ChatHelperService} from "../../../services/chat-helper.service";
import {CURRENT_USER_ID} from "../../../interfaces/IUser";

@Pipe({
    name: "unseenMessages"
})
export class UnseenMessagesPipe implements PipeTransform {

    constructor(private chatHelperService: ChatHelperService) {
    }

    transform(messages: IChatMessage[], chat: IChat): number {
        const userId = CURRENT_USER_ID;

        if (!this.chatHelperService.userInChatSubscribers(chat.subscribers, userId)) { return 0; }

        return messages?.filter(message => {
            return !this.chatHelperService.messageSeenBy(message, userId);
        }).length || 0;
    }

}
