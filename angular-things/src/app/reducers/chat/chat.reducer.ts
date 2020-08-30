import {initialState} from "./chat.init";
import * as chatActions from "./chat.actions";
import {cloneDeep, uniqBy} from "lodash";
import {Action, createReducer, on} from "@ngrx/store";
import {ChatEvents, IChat, IChatEvents, IChatMessage, IChatWithUnseen} from "../../interfaces/IChat";
import * as moment from "moment";
import {HelperService} from "../../services/helper.service";

export interface State {
    userChats: IChatWithUnseen[];
    messages: IChatMessage[];
    event?: { event: keyof IChatEvents, [key: string]: any };
}

const ChatReducer = createReducer(
    initialState,

    on(chatActions.init, () => cloneDeep(initialState)),

    on(chatActions.clear, () => cloneDeep(initialState)),

    on(chatActions.event, (state, event) => {
      console.log(event);
      return {...state, event: event};
    }),

    on(chatActions.send, (state, message) => {
      const msg = {...message.message, createdAt: moment().toISOString()}
      state.messages.push(msg);
      state.event = {event: ChatEvents.NewMessage + "$", message: msg};
      return {...state};
    }),

    on(chatActions.updateMessage, (state, message) => {
      const messageIndex = state.messages.findIndex(m => message.message.id === m._id);
      if (messageIndex !== -1) {
        state.messages[messageIndex] = {...state.messages[messageIndex], ...message.message.options};
      }
      state.event = {event: ChatEvents.UpdatedMessage + "$", message: state.messages[messageIndex]};
      return {...state};
    }),

    on(chatActions.invite, (state, chat) => {
      const chatIndex = state.userChats.findIndex(c => chat.chat.topic === c.topic);
      if (chatIndex !== -1) {
        const foundChat: IChat = state.userChats[chatIndex];
        for (let person of chat.chat.people) {
          if (!foundChat.subscribers.find(u => u.user === person)) {
            foundChat.subscribers.push({
              user: person,
              joinedAt: moment().toISOString(),
              active: true,
              settings: {}
            });
          }
        }
      }
      state.event = {event: ChatEvents.PeopleJoined + "$", people: chat.chat.people};
      return {...state};
    }),

    on(chatActions.seen, (state, topic) => {
        const chatIdx = state.userChats?.findIndex(chat => chat.topic === topic.data);
        if (chatIdx !== -1) {
            state.userChats[chatIdx].messages = {last: null, unseen: 0};
        }
        state.userChats = [...state.userChats];
        return state;
    }),
    on(chatActions.unseen, (state, data) => {
        const chatIdx = state.userChats?.findIndex(chat => chat.topic === data.topic);
        if (chatIdx !== -1) {
            const chat = state.userChats.splice(chatIdx, 1)[0];
            chat.messages = {
                last: {
                    createdAt: moment().toISOString(),
                    sender: data.message.sender?._id || data.message.sender,
                    content: data.message.content
                },
                unseen: (chat.messages?.unseen || 0) + 1
            };
            chat.lastSent = moment().toISOString();
            state.userChats = HelperService.arrayInsert(state.userChats, 0, chat);
        }

        return state;
    }),

    on(chatActions.loadChats, (state, chats) => {
        state.userChats = uniqBy([...(chats.data || []), ...state.userChats], "topic");
        return state;
    }),

    on(chatActions.removeChats, (state, topics) => {
        state.userChats = state.userChats.filter(c => !topics.data.includes(c.topic));
        return state;
    })
);

export function initChatReducer(state: State | undefined, action: Action) {
    return ChatReducer(state, action);
}
