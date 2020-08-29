import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {IUser} from "../../interfaces/IUser";
import {ChatHelperService} from "../../services/chat-helper.service";
import {UserFacade} from "../../reducers/user/user.facade";
import {CURRENT_USER_ID} from "../../interfaces/IUser";
import {take, takeUntil} from "rxjs/operators";
import {HelperService} from "../../services/helper.service";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent {
  @Input("user") set setUser(user: IUser | string | any) {
    this.user = user;
    if (!user) {
      return;
    }

    if (user === CURRENT_USER_ID) {
      this.userFacade.data.pipe(take(1)).subscribe((val: any) => {
        this.user = val;
      });
    } else if (typeof user === "string") {
      this.user = HelperService.generateUser(user);
    } else if (!this.user.fullName && typeof user === "object") {
      this.user.fullName = `${this.user.firstName} ${this.user.lastName}`;
    }

  }

  @Input() showGravatar: boolean = false;
  @Input() gravatarSize: number = 20;
  @Input() isChattable: boolean = true;
  @Input() hideName: boolean = false;

  public user: IUser | string | any;

  constructor(
    private userFacade: UserFacade,
    public chatHelper: ChatHelperService,
  ) {
  }

}
