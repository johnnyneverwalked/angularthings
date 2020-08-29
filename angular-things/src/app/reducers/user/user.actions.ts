import {createAction, props} from "@ngrx/store";
import {IUser} from "../../interfaces/IUser";

/** Generic Actions */

export const init =
    createAction("[User Api] Init user");

export const load =
    createAction("[User Api] Get user",  props<{id: string}>());

export const loadUser =
    createAction("[User Api] Load user", props<{user: Partial<IUser>}>());

