import {Pipe, PipeTransform} from "@angular/core";
import {cloneDeep} from "lodash";
import {IChatMessage, IChatMessageViewSeen} from "../../../interfaces/IChat";
import {ChatHelperService} from "../../../services/chat-helper.service";
import {CURRENT_USER_ID} from "../../../interfaces/IUser";

@Pipe({
    name: "messageSeen"
})
export class MessageHasSeenPipe implements PipeTransform {

    constructor(private chatHelperService: ChatHelperService) {
    }

    transform(value: IChatMessageViewSeen[], messages: IChatMessage[], index: number): IChatMessageViewSeen[] {
        const message = messages[index + 1];
        const newVal = cloneDeep(value);
        if (!message) {
            // It means this message is the last one
            // So we return everyone who is not the current user or has not seen the message yet
            // (this includes the current user)
            return newVal.filter(s => {
                return s.notYet || (s.user?._id || s.user) !== CURRENT_USER_ID;
            });
        }

        return newVal.filter(s => {
            return !this.chatHelperService.messageSeenBy(message, (s.user?._id || s.user)) && (s.user?._id || s.user) !== CURRENT_USER_ID;
        });
    }

}
