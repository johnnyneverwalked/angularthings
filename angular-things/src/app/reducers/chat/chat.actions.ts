import {createAction, props} from "@ngrx/store";
import {IChatEvents, IChatMessage, IChatWithUnseen} from "../../interfaces/IChat";

/** Generic Actions */

export const init =
    createAction("[Chat Api] Init Chat");

export const clear =
    createAction("[Chat Api] Clear Chats");

export const load =
    createAction("[Chat Api] Get chats to load");

export const loadChats =
    createAction("[Chat Api] Load Chats",                           props<{data: IChatWithUnseen[]}>());

export const event =
    createAction("[Chat Api] Chat event",                           props<{event: { event: keyof IChatEvents; [key: string]: any; } }>());

export const send =
    createAction("[Chat Api] Chat message send emulation",          props<{message: Partial<IChatMessage>}>());

export const updateMessage =
    createAction("[Chat Api] Chat message update emulation",        props<{message: { id: string; options: Partial<IChatMessage> }}>());

export const invite =
    createAction("[Chat Api] Chat invite emulation",                props<{chat: { topic: string; people: string[] }}>());

export const seen =
    createAction("[Chat Api] Seen chat messages",                   props<{data: string}>());

export const unseen =
    createAction("[Chat Api] Seen chat messages",                   props<{topic: string, message: IChatMessage}>());

export const removeChats =
    createAction("[Chat Api] Remove Chats",                         props<{data: string[]}>());

