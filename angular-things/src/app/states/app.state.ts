import {ChatState} from "./chat.state";
import {IUser} from "../interfaces/IUser";

export interface AppState {
    readonly user: IUser;
    readonly chats: ChatState;
    // readonly translation: Translation;
}
