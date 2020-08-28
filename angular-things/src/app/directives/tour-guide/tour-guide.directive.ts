import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';
import {TOUR_GUIDE_ATTR} from "../../interfaces/ITourGuide";

@Directive({
    selector: '[tourGuide]'
})
export class TourGuideDirective implements AfterViewInit {

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {
    }

    ngAfterViewInit(): void {
        let id = this.el.nativeElement.id || this.el.nativeElement["ng-reflect-id"];
        this.renderer.setAttribute(this.el.nativeElement, TOUR_GUIDE_ATTR, id);
    }

}
