import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import * as userActions from "./user.actions";
import {Observable} from "rxjs";
import {AppState} from "../../states/app.state";
import {CURRENT_USER_ID, IUser} from "../../interfaces/IUser";

@Injectable({providedIn: "root"})
export class UserFacade {

    constructor(
        private store: Store<AppState>,
    ) {
    }

    /** selectors */

    private data$: Observable<IUser> = this.store.pipe(select(state => state.user));

    /** methods */

    load(id: string) {
        // this.store.dispatch(userActions.load({id}));
        this.loadUser({
          _id: CURRENT_USER_ID,
          name: "Visitor",
          firstName: "You",
          lastName: "the Visitor",
          fullName: "You the Visitor",
          email: "test@test.test",
          gravatar: "test@test.test",
        });
    }

    loadUser(user: Partial<IUser>|any) {
        this.store.dispatch(userActions.loadUser({user}));
    }

    init() {
        this.store.dispatch(userActions.init());
    }

    /** getters */

    get data() {
        return this.data$;
    }

}
