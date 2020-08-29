/**
 *Made with <3 by C.R.U.D. at 11/10/2019
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IChat, IChatMessage} from "../../interfaces/IChat";
import {Observable, of} from "rxjs";
import * as moment from "moment";
import {ChatFacade} from "../../reducers/chat/chat.facade";
import {map, skip, take} from "rxjs/operators";
import {sortBy} from "lodash";
import {CURRENT_USER_ID} from "../../interfaces/IUser";

@Injectable({providedIn: "root"})
export class ChatService {
    public readonly baseUrl: string = "/chat";
    public readonly messageUrl: string = "/chat-message";

    constructor(
        // public httpClient: HttpClient,
        public chatFacade: ChatFacade
    ) {
    }

    findChat(topic: string, visible?: boolean): Observable<{chat: IChat; new?: boolean}> {
      return this.chatFacade.data.pipe(take(1), map(res => {
        const chat = res.find(c => c.topic === topic);
        const users = topic.replace("chat-", "").split("-");
        users.shift();
        return {
          chat: chat || <IChat>{
            topic,
            type: topic.replace("chat-", "").split("-")[0],
            creator: CURRENT_USER_ID,
            createdAt: moment().toISOString(),
            subscribers: users.map(userId => ({
              user: userId,
              settings: {},
              active: true,
              joinedAt: moment().toISOString()
            }))
          },
          new: !chat
        };
      }));
        // return this.httpClient.get(`${this.baseUrl}/findOrCreate/${topic}`, {params: visible ? {visible: visible.toString()} : {}});
    }

    listenToUserChats(): Observable<IChat[]> {
      return this.chatFacade.data;
        // return this.httpClient.get(`${this.baseUrl}/init`);
    }

    invite(topic: string, people: string[]): Observable<IChat> {
      this.chatFacade.invite(topic, people);
      return this.chatFacade.data.pipe(take(1), map(res => res.find(chat => chat.topic === topic)));
        // return this.httpClient.post(`${this.baseUrl}/invite/${topic}`, {people});
    }

    // leave(topic: string): Observable<any> {
    //     return this.httpClient.get(`${this.baseUrl}/leave/${topic}`);
    // }

    getMessages(topic: string, before?: string): Observable<IChatMessage[]> {
      return this.chatFacade.messages.pipe(take(1), map(res => {
        return sortBy((res || []).filter(msg => msg.topic === topic), (msg) => moment(msg.createdAt).toDate());
      }));
        // return this.httpClient.get(`${this.messageUrl}`, {
        //     params: {
        //         sort: "-createdAt",
        //         limit: "50",
        //         topic,
        //         [`<createdAt`]: `${before || moment.utc().toISOString()}`
        //     }
        // });
    }

    sendMessage(message: Partial<IChatMessage>): Observable<Partial<IChatMessage>> {
      message._id = Math.random().toString();
      this.chatFacade.sendMessage(message);
      return of(message);
        // return this.httpClient.post(`${this.messageUrl}/create`, message);
    }

    updateMessage(id: string, options: any = {}): Observable<IChatMessage> {
      this.chatFacade.updateMessage(id, options);
      return this.chatFacade.messages.pipe(take(1), skip(1), map(res => ({
        ...(res.find(msg => msg._id === id) || {_id: id}),
        ...options
      })));
        // return this.httpClient.put(`${this.messageUrl}/update/${id}`, options);
    }

    markAsSeen(topic: string, messageIds: string[]): Observable<boolean> {
      return of(true);
        // return this.httpClient.put(`${this.messageUrl}/seen`, {topic, messageIds});
    }
}
