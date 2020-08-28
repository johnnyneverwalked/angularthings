import {BehaviorSubject} from "rxjs";

export interface TabModel {
  name: string;
  displayName?: string;
  icon?: string;
  icons?: string[];
  disabled?: BehaviorSubject<boolean>;
  hidden?: boolean;
}
