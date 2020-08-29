import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import * as chatActions from "./chat.actions";
import {Observable} from "rxjs";
import {ChatEvents, IChat, IChatEvents, IChatMessage} from "../../interfaces/IChat";
import {AppState} from "../../states/app.state";

@Injectable()
export class ChatFacade {

    constructor(
        private store: Store<AppState>,
    ) {
    }

    /** selectors */

    private data$: Observable<IChat[]> = this.store.pipe(select(state => state.chats.userChats));
    private messages$: Observable<IChatMessage[]> = this.store.pipe(select(state => state.chats.messages));
    // ? for the demo purposes replaces sockets
    private event$: Observable<{ event: keyof IChatEvents, [key: string]: any }> = this.store.pipe(select(state => state.chats.event));

    /** methods */

    load() {
        this.store.dispatch(chatActions.load());
    }

    init() {
        this.store.dispatch(chatActions.init());
    }

    clear() {
        this.store.dispatch(chatActions.clear());
    }

    sendEvent(event: { event: keyof IChatEvents, [key: string]: any }) {
      this.store.dispatch(chatActions.event({event}));
    }

    sendMessage(message: Partial<IChatMessage>) {
      this.store.dispatch(chatActions.send({message}));
      // this.store.dispatch(chatActions.event({event: ChatEvents.NewMessage + "$", message}))
    }

  updateMessage(id: string, options: any) {
      this.store.dispatch(chatActions.updateMessage({message: {id, options}}));
      // this.store.dispatch(chatActions.event({event: ChatEvents.NewMessage + "$", message}))
    }

  invite(topic: string, people: string[]) {
      this.store.dispatch(chatActions.invite({chat: {topic, people}}));
      // this.store.dispatch(chatActions.event({event: ChatEvents.NewMessage + "$", message}))
    }

    seen(data: string) {
        this.store.dispatch(chatActions.seen({data}));
    }

    unseen(topic: string, message: IChatMessage) {
        this.store.dispatch(chatActions.unseen({topic, message}));
    }

    loadChats(data: IChat[] = []) {
        // data.forEach(chat => this.socket.join(chat.topic));
        this.store.dispatch(chatActions.loadChats({data}));
    }

    removeChats(data: string[] = []) {
        // data.forEach(topic => this.socket.leave(topic));
        this.store.dispatch(chatActions.removeChats({data}));
    }

    /** getters */

    get data() {
        return this.data$;
    }
    get messages() {
        return this.messages$;
    }
    get event() {
        return this.event$;
    }

}
