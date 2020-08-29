import {IModel} from "./IModel";
import {Observable} from "rxjs";
import IStringMap from "./StringMap";
import {IUser} from "./IUser";


export interface IChat extends IModel {
  topic: string;
  name?: string;
  type?: ChatType;
  lastSent?: Date | string | any;
  options?: {
    color?: string;
    icon?: string;
  };
  creator: string | any | IUser;
  subscribers: IChatUser[];
  activeAction?: Partial<IChatMessageAction> | any;
}

export interface IChatWithUnseen extends IChat {
  messages?: { unseen: number, last: { sender: string, content: string, createdAt: string } };
}

export interface IChatUser extends IModel {
  user: string | any | IUser;
  settings?: IChatUserSettings;
  active?: boolean;
  joinedAt?: string | Date;
}

export interface IChatUserSettings {
  mute?: boolean;
  stealth?: boolean;
  seeTypingMessages?: boolean;
}

export interface IChatMessage extends IModel {
  topic: string;
  sender: string | any | IUser;
  seen?: (string | any | IUser)[];
  deleted?: boolean;
  receiver?: string | any | IUser;
  notify?: boolean;
  content?: string;
  automated?: boolean;
  media?: IChatMedia[];
  action?: IChatMessageAction;
  viewSeen?: IChatMessageViewSeen[]; // only for view purposes
  metaData?: any;
}

export interface IChatMessageSeen {
  user: (string | any | IUser);
  date: Date;
}

export interface IChatMessageViewSeen extends IChatMessageSeen {
  notYet?: boolean;
}

export interface IChatMedia {
  url: string;
  type: "video" | "audio" | "photo";
}

export interface IChatMessageAction {
  kind: ChatActionKind;
  type?: ChatActionType;
  data?: {
    content?: string | any;
    yesBtnText?: string;
    noBtnText?: string;
    generalBtnText?: string;
    multiChoiceOptions?: (string | { name: string; content?: string } | any)[]
  };
  results?: IStringMap<any>;
  status: "completed" | "pending" | "canceled";
}

export interface IChatEvents {
  newMessage$?: Observable<IChatMessage>;
  updatedMessage$?: Observable<IChatMessage>;
  messagesSeen$?: Observable<{ topic: string, userId: string, messageIds?: string[] }>;
  peopleJoined$?: Observable<{ topic: string, people: (string | any | IUser)[] }>;
  typing$?: Observable<{ topic: string, user: string | any | IUser }>;
  userLeft$?: Observable<{ topic: string, user: string }>;
  updatedChat$?: Observable<IChat>;
}


/** ENUMS and CONSTANTS*/

export enum ChatType {
  Generic = "generic", // chat-generic-{unique mongoId}
  Direct = "direct", // chat-direct-{userId}-{userId}-{entityId} entityId is not required and only used on specific chats
}

export enum ChatEvents {
  NewMessage = "newMessage",
  UpdatedMessage = "updatedMessage",
  MessagesSeen = "messagesSeen",
  UpdatedChat = "updatedChat",
  PeopleJoined = "peopleJoined",
  Typing = "typing",
  StartedTyping = "startedTyping",
  UserLeft = "userLeft"
}

export enum ChatActionType {
  Amount = "amount"
}

export enum ChatActionKind {
  Question = "yesNo",
  MultipleChoice = "multiChoice",
  Button = "btn",
}

export const StoredChats = "chatRooms";
export const BaseChatAlias = "Support";

export const ChatColors: string[] = [
  "default",
  "bg-primary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "table-primary",
  "table-danger",
  "orange-static",
  "purple-static",
  "brown",
  "teal",
  "pink",
  "light-blue",
  "gradient-teal-pink",
  "gradient-purple",
  "gradient-blue",
  "gradient-orange",
  "gradient-red-pink",
  "gradient-red-blue",
  "gradient-green-teal",
  "gradient-blue-green",
  "gradient-purple-orange",
  "gradient-grey",
  "gradient-wiretap",
  "gradient-moonlit-asteroid",
  "gradient-midnight-city",
  "youtube",
  "gradient-animation"
];

