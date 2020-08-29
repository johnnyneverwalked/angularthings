import {initialState} from "./user.init";
import * as userActions from "./user.actions";
import {cloneDeep} from "lodash";
import {Action, createReducer, on} from "@ngrx/store";
import {IUser} from "../../interfaces/IUser";

export interface State extends IUser {
    [key: string]: any;
}

const userReducer = createReducer(
    initialState,

    on(userActions.init, () => cloneDeep(initialState)),

    on(userActions.loadUser, (state, {user}) => {
        if (user?._id) {
            state = user;
        }
        return {...state};
    })
);

export function initUserReducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}
