import {Positions} from "./Generics";

export interface ITourGuideStep {
    id?: string;
    title?: string;
    text?: string;
    tooltipPosition?: Positions;
    disabledStep?: boolean;
    dbId?: string;
    _mongoId?: string;

    onNext?(): void;

    onPrev?(): void;

    onBefore?(): void;

    onAfter?(): void;
}

export interface ITooltipContent {
    id?: string;
    dbId?: string;
    _mongoId?: string;
    title: string;
    text?: string;
}

export interface ITourGuidePageEvent {
    page: "previous" | "next";
    url: string;
}

export interface ITourGuideEndEvent {
    step?: number;
    prematureEnd?: boolean;
    pageChanged?: boolean;
    escapeKey?: boolean;
    backdropClicked?: boolean;
}

export const TOUR_GUIDE_ATTR = "tourguide";
export const TOUR_GUIDE_VERBAL_TYPE = "tourGuide";
export const TOOLTIP_MARGIN = 20;
export const TOOLTIP_DB_ERROR = {
    title: "No step data.",
    text: "The 'dbId' of this step was not found in the Database. Maybe it was changed or not yet set? " +
        "If you had set this step's data before please notify a developer.",
    _mongoId: null
};
export const POSSIBLE_TOOLTIP_POSITIONS = [
    "top",
    "right",
    "bottom",
    "left"
];
