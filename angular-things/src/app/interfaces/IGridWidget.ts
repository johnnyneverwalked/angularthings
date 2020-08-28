
export default interface IGridWidget {
    type: WidgetType;
    data?: object;
    output?: string[];
    id?: string;
    options?: IGridWidgetOptions;
}

export interface IGridWidgetOptions {
    class?: string;
    style?: object;
    active?: boolean;
    empty?: boolean;
}

export interface IWidgetModification {
    overwrite?: boolean;
    data?: object;
    options?: IGridWidgetOptions;
}
export interface IWidgetEvent {
    type: string;
    value?: any;
}

export type WidgetType =
    "EmptySpace" |
    "ButtonComponent" |
    "UrlShortcutComponent" |
    "TodoListComponent" |
    "LiveUsersMiniComponent";
