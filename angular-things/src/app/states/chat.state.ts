import {IChatMessage, IChat, IChatEvents} from "../interfaces/IChat";

export interface ChatState {
    userChats: IChat[];
    messages: IChatMessage[];
  event?: { event: keyof IChatEvents, [key: string]: any };
}
