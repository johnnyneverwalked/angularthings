import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    OnDestroy,
    AfterViewInit,
    isDevMode,
    Output,
    QueryList,
    Renderer2,
    ViewChild,
    ViewChildren
} from '@angular/core';
import {
    ITooltipContent,
    ITourGuideEndEvent,
    ITourGuidePageEvent,
    ITourGuideStep,
    POSSIBLE_TOOLTIP_POSITIONS,
    TOOLTIP_DB_ERROR,
    TOOLTIP_MARGIN,
    TOUR_GUIDE_ATTR,
    TOUR_GUIDE_VERBAL_TYPE
} from "../../interfaces/ITourGuide";
import {NavigationService} from "../../services/navigation/navigation.service";
import {fade} from "../../animations/enter-leave.animation";
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {environment} from "../../../environments/environment";
import {HelperService} from "../../services/helper.service";

@Component({
    selector: "app-tour-guide",
    templateUrl: "./tour-guide.component.html",
    animations: [
        fade
    ],
    styleUrls: ["./tour-guide.component.scss"]
})

export class TourGuideComponent implements OnInit, OnDestroy, AfterViewInit {

    @Input() steps: ITourGuideStep[] = [];
    @Input() canEditSteps: boolean = true;
    @Input() hasBackdrop: boolean = true;
    @Input() canSkipSteps: boolean = true;
    @Input() canEndTour: boolean = true;
    @Input() canEndFromBackdrop: boolean = false;
    @Input() hasProgressBar: boolean = false;
    @Input() prevPageUrl: string;
    @Input() prevPageTitle: string;
    @Input() nextPageUrl: string;
    @Input() nextPageTitle: string;

    @Output() tourStarted: EventEmitter<void> = new EventEmitter<void>();
    @Output() tourEnded: EventEmitter<ITourGuideEndEvent> = new EventEmitter<ITourGuideEndEvent>();
    @Output() pageChange: EventEmitter<ITourGuidePageEvent> = new EventEmitter<ITourGuidePageEvent>();

    public visibleTooltip: boolean = false;
    public visibleTooltipButton: boolean = false;
    public openedEditor: boolean = false;
    public tooltipContent: ITooltipContent = {
        title: "Tour Guide",
        text: "This is a tutorial to help you with understanding how to use this entity..."
    };
    public isDevMode: boolean;
    private _currentStep: number = -1;
    private _currentPage: number = -1;
    private _currentStepRect: DOMRect | ClientRect = null;
    private _ongoing: boolean = false;
    private _scrolling: boolean = false;
    private _changingStep: boolean = false;
    private _unsub$: Subject<void> = new Subject<void>();

    @ViewChildren("tooltip") tooltip: QueryList<ElementRef>;
    @ViewChild("highlighted") highlighted: ElementRef;
    @ViewChild("progress") progress: ElementRef;
    @ViewChild("tooltipShow") tooltipShow: ElementRef;
    @ViewChild("shortcutsModal") shortcutModal: ElementRef;

    constructor(
        private navigation: NavigationService,
        private cd: ChangeDetectorRef,
        private renderer: Renderer2,
        private el: ElementRef,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        el.nativeElement["startTour"] = () => {
            this.startTour();
        };
        el.nativeElement["isOngoing"] = () => {
            return this.isOngoing;
        };
    }

    ngOnInit(): void {
        document.documentElement.addEventListener("keydown", this._keyShortcuts.bind(this));
        this.isDevMode = isDevMode() || !environment.production;
    }

    ngOnDestroy(): void {
        document.documentElement.removeEventListener("keydown", this._keyShortcuts);
        this.endTour();
        this._unsub$.next();
    }

    ngAfterViewInit(): void {
        this.route.queryParams.pipe(takeUntil(this._unsub$)).subscribe(params => {
            if (params.hasOwnProperty(TOUR_GUIDE_ATTR) && !this.isOngoing) {
                setTimeout(() => {
                    this.startTour();
                });
            }
        });
    }

    // INITIALIZERS

    /**
     * @description Sets the tour state to onGoing and emits an event indicating the tour has started
     */
    public startTour() {
        if (!this.steps.length) {
            return;
        }
        this._ongoing = true;
        this.tourStarted.emit();
        this._currentStep = -1;
        this.nextStep();
    }

    /**
     * @description Clears all the tour-guide related classes from the elements, ends the tour and emits an event with relevant info
     * such as if the tour finished prematurely, if the esc was pressed etc.
     * @param {ITourGuideEndEvent} event    - The event to be emitted when the tour ends
     */
    public endTour(event?: ITourGuideEndEvent) {
        this._clearSteps();
        let evt: ITourGuideEndEvent = {
            escapeKey: false,
            pageChanged: false,
            prematureEnd: this.currentStep < this.steps.length - 1,
            backdropClicked: false,
            step: this.currentStep
        };
        if (event) {
            evt = {...evt, ...event};
        }
        this.tourEnded.emit(evt);
        this._ongoing = false;
    }

    /**
     * @description On backdrop click, if both canEndTour and canEndFromBackdrop are true, calls endTour with event of backdropClicked = true
     */
    public backDropEnd() {
        if (this.canEndTour && this.canEndFromBackdrop) {
            this.endTour({backdropClicked: true});
        }
    }


    // STEP NAVIGATION

    /**
     * @description ends the current tour, emits a pageChange event and navigates to the url of the next page with a 'tourguide' parameter attached to it.
     * This is done in case there exists a tour-guide on that page so it starts automatically.
     */
    public async nextPage() {
        const url = this.nextPageUrl.startsWith("/") ? this.nextPageUrl : "/" + this.nextPageUrl;
        this.endTour({pageChanged: true});
        if (this.steps[this.currentStep].hasOwnProperty("onNext")) {
            this.steps[this.currentStep].onNext();
            await HelperService.sleep(0);
        }
        this.pageChange.emit({
            page: "next",
            url
        });
        await this.router.navigateByUrl(url + "?" + TOUR_GUIDE_ATTR + '=true');
    }

    /**
     * @description ends the current tour, emits a pageChange event and navigates to the url of the previous page with a 'tourguide' parameter attached to it.
     * This is done in case there exists a tour-guide on that page so it starts automatically.
     */
    public async prevPage() {
        const url = this.prevPageUrl.startsWith("/") ? this.prevPageUrl : "/" + this.prevPageUrl;
        this.endTour({pageChanged: true});
        if (this.steps[this.currentStep].hasOwnProperty("onPrev")) {
            this.steps[this.currentStep].onPrev();
            await HelperService.sleep(0);
        }
        this.pageChange.emit({
            page: "previous",
            url
        });
        await this.router.navigateByUrl(url + "?" + TOUR_GUIDE_ATTR + '=true');
    }

    /**
     * @description increments the step counter, runs onBefore() of the current step, onNext() of the previous step and then goes to the current step.
     */
    public async nextStep() {
        this._changingStep = true;

        if (++this._currentStep >= this.steps.length) {
            this._currentStep = this.steps.length - 1;
        }

        if (this.steps[this.currentStep].hasOwnProperty("onBefore")) {
            this.steps[this.currentStep].onBefore();
        }

        const prevStep = this.steps[this._currentStep - 1];

        if (prevStep && prevStep.hasOwnProperty("onNext")) {
            this.steps[this._currentStep - 1].onNext();
        }

        this.cd.detectChanges();
        await HelperService.sleep(0);

        this._goToStep(this.currentStep, "next");
    }

    /**
     * @description decrements the step counter, runs onBefore() of the current step, onPrev() of the next step and then goes to the current step.
     */
    public async prevStep() {
        this._changingStep = true;

        if (--this._currentStep < 0) {
            this._currentStep = 0;
        }

        if (this.steps[this.currentStep].hasOwnProperty("onBefore")) {
            this.steps[this.currentStep].onBefore();
        }

        const nextStep = this.steps[this._currentStep + 1];

        if (nextStep && nextStep.hasOwnProperty("onPrev")) {
            this.steps[this._currentStep + 1].onPrev();
        }

        this.cd.detectChanges();
        await HelperService.sleep(0);

        this._goToStep(this.currentStep, "previous");
    }

    /**
     * @description Sets the step counter to one more/less than the step indicated and then calls prevStep()/nextStep() respectively
     * @param {number} step - The step to go to
     */
    public goToStepViaProgress(step: number) {
        if (step > this.currentStep && this.canSkipSteps) {
            this._currentStep = step - 1;
            this.nextStep();
        } else if (step < this.currentStep) {
            this._currentStep = step + 1;
            this.prevStep();
        }
    }

    /**
     * @description Sets the tour state to changingStep, scrolls to the current step's element if needed and manipulates
     * the DOM to highlight the current step
     * @param {number} step                     - The step to go to.
     * @param {"previous"|"next"} progress      - Concerns the animation of the progress bar
     * @private
     */
    private _goToStep(step: number, progress?: "previous" | "next") {
        if (!this.steps.length) {
            this.endTour();
            return;
        }
        this._changingStep = true;
        let stepElement = document.querySelector("[" + TOUR_GUIDE_ATTR + "='" + this.steps[step].id + "']");
        this.toggleTooltip(false);
        if (stepElement) {
            const coords = stepElement.getBoundingClientRect();
            if (coords.top < 0 || coords.bottom > document.documentElement.offsetHeight) {
                this._scrolling = true;
                this._clearSteps();
                this.navigation.scrollToId(stepElement.id).subscribe(
                    value => {
                    },
                    error => {
                        console.warn(error);
                    },
                    () => {
                        this._renderStep(step, stepElement, progress);
                        this._afterStepCalculations(step);
                    }
                );
            } else {
                setTimeout(() => {
                    this._clearSteps();
                    this._renderStep(step, stepElement, progress);
                    this._afterStepCalculations(step);
                }, 300);
            }


        } else {
            setTimeout(() => {
                this._clearSteps();
                this.toggleTooltip(true, false, progress);
                this.cd.detectChanges();
                POSSIBLE_TOOLTIP_POSITIONS.forEach(pos => {
                    this.renderer.removeStyle(this.tooltip.first.nativeElement, pos);
                });
                this._calcHighlightPosition(true);
                this._afterStepCalculations(step);
            }, 300);
        }
        this._setTooltipContent({
            title: this.steps[step].title,
            text: this.steps[step].text
        });
    }

    /**
     * @description Sets changingStep state to false and runs the current step's onAfter method if it exists
     * @param step  - The indicated step's index
     * @private
     */
    private _afterStepCalculations(step: number) {
        this._changingStep = false;
        if (this.steps[step].hasOwnProperty("onAfter")) {
            this.steps[step].onAfter();
        }
    }


    // GETTERS

    public get currentStep(): number {
        return this._currentStep;
    }

    public get currentPage(): number {
        return this._currentPage;
    }

    public get scrolling(): boolean {
        return this._scrolling;
    }

    public get isOngoing(): boolean {
        return this._ongoing;
    }


    // DOM MANIPULATION

    /**
     * @description Adds the relevant tour-guide classes and events to the step and calculates the tooltip's position
     * @param {number} step                 - The indicated step's index
     * @param {Element} stepElement         - The step's corresponding DOM element
     * @param {"previous"|"next"} progress  - Concerns the progress bar animation
     * @private
     */
    private _renderStep(step: number, stepElement: Element, progress?: "previous" | "next") {
        this._scrolling = false;
        this.toggleTooltip(true, false, progress);
        this._currentStepRect = stepElement.getBoundingClientRect();
        this._calcTooltipPosition(this.steps[step].tooltipPosition);
        this._calcHighlightPosition();
        stepElement.addEventListener("wheel", this._disableScrollEvent);
        this.renderer.addClass(stepElement, "tour-guide-highlighted");
        if (this.hasBackdrop && !(this.canEditSteps && !this.steps[step].disabledStep)) {
            this.renderer.addClass(stepElement, "tour-guide-disabled-step");
        }
    }

    /**
     * @description Clears all tour-guide classes and events from the steps' elements
     * @private
     */
    private _clearSteps() {
        let stepElements = document.getElementsByClassName("tour-guide-highlighted");
        for (let i = 0; i < stepElements.length; i++) {
            let el = stepElements[i];
            this.renderer.removeClass(el, "tour-guide-highlighted");
            this.renderer.removeClass(el, "tour-guide-disabled-step");

            el.removeEventListener("wheel", this._disableScrollEvent);
        }
    }

    /**
     * @description Sets the tooltip visibility, reruns positioning calculations if needed and animates the progress bar fill
     * @param {boolean} val                 - Whether to set to visible or invisible
     * @param {boolean} recalc              - Whether to run calculations regarding the tooltip's position
     * @param {"previous"|"next"} progress  - Concerns the progress bar animation
     */
    public toggleTooltip(val: boolean, recalc: boolean = false, progress?: "previous" | "next") {
        this.visibleTooltip = val;
        this.visibleTooltipButton = false;
        if (recalc && this.steps[this.currentStep] && this.steps[this.currentStep].id) {
            this._calcTooltipPosition(this.steps[this._currentStep].tooltipPosition);
        }
        if (val && this.hasProgressBar) {
            this.cd.detectChanges();

            let progressBefore;
            let progressAfter = (this.steps.length ? ((this.currentStep + 1) / this.steps.length) * 100 : 0).toFixed(0);

            switch (progress) {
                case "previous":
                    progressBefore = (this.steps.length ? ((this.currentStep + 2) / this.steps.length) * 100 : 0).toFixed(0);
                    this.renderer.setStyle(this.progress.nativeElement, "width", progressBefore + "%");
                    setTimeout(() => {
                        this.renderer.setStyle(this.progress.nativeElement, "width", progressAfter + "%");
                    }, 0);
                    break;
                case "next":
                    progressBefore = (this.steps.length ? ((this.currentStep) / this.steps.length) * 100 : 0).toFixed(0);
                    this.renderer.setStyle(this.progress.nativeElement, "width", progressBefore + "%");
                    setTimeout(() => {
                        this.renderer.setStyle(this.progress.nativeElement, "width", progressAfter + "%");
                        if (this.currentStep === this.steps.length - 1) {
                            this.renderer.addClass(this.progress.nativeElement, "bg-success");
                        }
                    }, 0);
                    break;
                default:
                    this.renderer.setStyle(this.progress.nativeElement, "width", progressAfter + "%");
                    if (this.currentStep === this.steps.length - 1) {
                        this.renderer.addClass(this.progress.nativeElement, "bg-success");
                    }
                    break;
            }
        }
    }

    /**
     * @description Shows the button when tooltip is not visible and positions it correctly relevant to the step element
     */
    public showTooltipButton() {
        this.visibleTooltipButton = true;
        this.cd.detectChanges();

        if (!(this.steps[this.currentStep] && this.steps[this.currentStep].id)) {
            this.renderer.removeStyle(this.tooltipShow.nativeElement, "top");
            this.renderer.removeStyle(this.tooltipShow.nativeElement, "right");
            return;
        }
        if (this._currentStepRect.top - this.tooltipShow.nativeElement.offsetHeight >= 0) {
            this.renderer.setStyle(this.tooltipShow.nativeElement,
                "top",
                this._currentStepRect.top - this.tooltipShow.nativeElement.offsetHeight + "px");
        } else {
            this.renderer.setStyle(this.tooltipShow.nativeElement,
                "top",
                this._currentStepRect.top + this._currentStepRect.height + "px");
        }

        if (document.documentElement.offsetWidth - this._currentStepRect.left >= 0) {
            this.renderer.setStyle(this.tooltipShow.nativeElement,
                "right",
                document.documentElement.offsetWidth - this._currentStepRect.left + "px");
        } else {
            this.renderer.setStyle(this.tooltipShow.nativeElement,
                "right",
                document.documentElement.offsetWidth - this._currentStepRect.right - this.tooltipShow.nativeElement.offsetWidth + "px");
        }

    }

    /**
     * @description Tries to set the tooltip to the specified position relative to the step element, provided it is fully visible without covering it.
     * If it fails it recursively tries to set the tooltip to the first cardinal position satisfying those requirements, clockwise starting from the top.
     * Finally if it fails again it forcefully sets the tooltip to the top position.
     * @param {string} pos      -   The tooltip position relative to the step element
     * @param {number} tryNo    -   Number of tries used for recursion purposes. You do not have to set this
     * @private
     */
    private _calcTooltipPosition(pos: string, tryNo: number = -1) {
        if (!this._currentStepRect) {
            return;
        }
        this.cd.detectChanges();
        const el = this.tooltip.first.nativeElement;
        let newPos = 0;

        switch (pos) {
            case "top":
                newPos = this._currentStepRect.top - el.offsetHeight - TOOLTIP_MARGIN;
                if (newPos < 0) {
                    this._calcTooltipPosition(POSSIBLE_TOOLTIP_POSITIONS[++tryNo], tryNo);
                } else {
                    this.renderer.setStyle(el, "top", newPos + "px");
                    this.renderer.addClass(el, "triangle-bottom");
                    this._centerTooltip(false);
                }
                break;
            case "right":
                newPos = this._currentStepRect.right + el.offsetWidth + TOOLTIP_MARGIN;
                if (newPos > document.documentElement.offsetWidth) {
                    this._calcTooltipPosition(POSSIBLE_TOOLTIP_POSITIONS[++tryNo], tryNo);
                } else {
                    this.renderer.setStyle(el, "left", this._currentStepRect.right + TOOLTIP_MARGIN + "px");
                    this.renderer.addClass(el, "triangle-left");
                    this._centerTooltip(true);
                }
                break;
            case "bottom":
                newPos = this._currentStepRect.bottom + el.offsetHeight + TOOLTIP_MARGIN;
                if (newPos > document.documentElement.offsetHeight) {
                    this._calcTooltipPosition(POSSIBLE_TOOLTIP_POSITIONS[++tryNo], tryNo);
                } else {
                    this.renderer.setStyle(el, "top", this._currentStepRect.bottom + TOOLTIP_MARGIN + "px");
                    this.renderer.addClass(el, "triangle-top");
                    this._centerTooltip(false);
                }
                break;
            case "left":
                newPos = this._currentStepRect.left - el.offsetWidth - TOOLTIP_MARGIN;
                if (newPos < 0) {
                    this._calcTooltipPosition(POSSIBLE_TOOLTIP_POSITIONS[++tryNo], tryNo);
                } else {
                    this.renderer.setStyle(el, "left", newPos + "px");
                    this.renderer.addClass(el, "triangle-right");
                    this._centerTooltip(true);
                }
                break;
            default:
                if (tryNo < POSSIBLE_TOOLTIP_POSITIONS.length) {
                    this._calcTooltipPosition(POSSIBLE_TOOLTIP_POSITIONS[++tryNo], tryNo);
                } else {
                    this.renderer.setStyle(el,
                        "top",
                        0);
                    this.renderer.addClass(el, "triangle-bottom");
                    this._centerTooltip(false);
                }
        }
    }

    /**
     * @description Sets the highlight background behind the current step element if it exists
     * @param {boolean} hide    - Whether the highlight background is visible
     * @private
     */
    private _calcHighlightPosition(hide: boolean = false) {
        if (!this._currentStepRect || hide) {
            this.renderer.setStyle(this.highlighted.nativeElement, "display", "none");
            return;
        }
        this.renderer.removeStyle(this.highlighted.nativeElement, "display");

        this.renderer.setStyle(this.highlighted.nativeElement, "width", this._currentStepRect.width + 10 + "px");
        this.renderer.setStyle(this.highlighted.nativeElement, "height", this._currentStepRect.height + 10 + "px");
        this.renderer.setStyle(this.highlighted.nativeElement, "top", this._currentStepRect.top - 5 + "px");
        this.renderer.setStyle(this.highlighted.nativeElement, "left", this._currentStepRect.left - 5 + "px");
    }

    /**
     * @description Centers the tooltip relative to the step element and the edge of the screen. If it fits in the screen it is fully centered,
     * otherwise it is set to the edge of the screen. In the second case the tooltip arrow is moved to the top, center or bottom of the tooltip
     * depending on the position of the step element relative to it.
     * @param {boolean} vertical    - Whether to center the tooltip vertically or horizontally
     * @private
     */
    private _centerTooltip(vertical: boolean = false) {
        const el = this.tooltip.first.nativeElement;
        if (!(el || this._currentStepRect)) {
            return;
        }
        let centeredPos;

        if (vertical) {
            centeredPos = this._currentStepRect.top + this._currentStepRect.height / 2 - el.offsetHeight / 2;
            if (centeredPos < 0) {
                centeredPos = 0;
                this.renderer.addClass(el, "edit-bottom");

            } else if (centeredPos + el.offsetHeight > document.documentElement.offsetHeight) {
                centeredPos = document.documentElement.offsetHeight - el.offsetHeight;
            }

            let arrowPos = (centeredPos + el.offsetHeight - this._currentStepRect.top - this._currentStepRect.height / 2) / el.offsetHeight;

            if (arrowPos <= 0.3) {
                this.renderer.addClass(el, "arrow-bottom");
            } else if (arrowPos >= 0.7) {
                this.renderer.addClass(el, "arrow-top");
            }

            this.renderer.setStyle(el,
                "top",
                centeredPos + "px");

        } else {
            centeredPos = this._currentStepRect.left + this._currentStepRect.width / 2 - el.offsetWidth / 2;
            if (centeredPos < 0) {
                centeredPos = 0;
                this.renderer.addClass(el, "edit-right");

            } else if (centeredPos + el.offsetWidth > document.documentElement.offsetWidth) {
                centeredPos = document.documentElement.offsetWidth - el.offsetWidth;
            }


            let arrowPos = (centeredPos + el.offsetWidth - this._currentStepRect.left - this._currentStepRect.width / 2) / el.offsetWidth;

            if (arrowPos <= 0.3) {
                this.renderer.addClass(el, "arrow-right");
            } else if (arrowPos >= 0.7) {
                this.renderer.addClass(el, "arrow-left");
            }

            this.renderer.setStyle(el,
                "left",
                centeredPos + "px");
        }
    }


    // EVENT HANDLING

    private _disableScrollEvent(evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }

    /**
     * @description Enables keyboard shortcuts for the tour navigation
     * @param evt   - The keyboard event
     * @private
     */
    private _keyShortcuts(evt) {
        if (!this.isOngoing || this.openedEditor) {
            return;
        }

        if (evt.key === "Escape" && (this.canEndTour || this.currentStep >= this.steps.length - 1 || (evt.ctrlKey && evt.shiftKey))) {
            if (this.isOngoing) {
                evt.preventDefault();
                this.endTour({escapeKey: true});
            }
        } else if (evt.key === "Tab") {
            evt.preventDefault();
            evt.stopPropagation();
            if (evt.shiftKey) {
                if (this.currentStep > 0 && !this._changingStep) {
                    this.prevStep();
                }
            } else if (this.currentStep < this.steps.length - 1 && !this._changingStep) {
                this.nextStep();
            }

        } else if (evt.ctrlKey) {
            evt.preventDefault();
            switch (evt.key) {
                case "ArrowRight":
                    if (this.currentStep < this.steps.length - 1 && !this._changingStep) {
                        this.nextStep();
                    }
                    break;
                case "ArrowLeft":
                    if (this.currentStep > 0 && !this._changingStep) {
                        this.prevStep();
                    }
                    break;
                case "q":
                    if (this.visibleTooltip) {
                        this.toggleTooltip(false);
                        this.showTooltipButton();
                    } else {
                        this.toggleTooltip(true, true);
                    }
                    break;
                case "r":
                    this.startTour();
                    break;
            }
        }

    }


    // VERBALS

    /**
     * @description Helper method that sets the tooltip content while parsing html entities
     * @param {ITooltipContent} content - The content to be set
     * @private
     */
    private _setTooltipContent (content: ITooltipContent) {
        this.tooltipContent.title = HelperService.decodeHtml(content.title);
        this.tooltipContent.text = HelperService.decodeHtml(content.text);
    }

    /**
     * @description Sets the title, text, and mongoId of the indicated step and recalculates tooltipPosition relative to it
     * @param {ITourGuideStep} step     - The step to set the content of
     * @param {ITooltipContent} content - The content to be set
     * @private
     */
    private _updateStepVerbal(step: ITourGuideStep, content: ITooltipContent) {
        step.title = HelperService.decodeHtml(content.title);
        step.text = HelperService.decodeHtml(content.text);
        step._mongoId = content._mongoId;

        this._setTooltipContent(content);

        if (this.visibleTooltip) {
            this.toggleTooltip(false);
            setTimeout(() => {
                this.toggleTooltip(true, true);
            });
        }
    }
}

