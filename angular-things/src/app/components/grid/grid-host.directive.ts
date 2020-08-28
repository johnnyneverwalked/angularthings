import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[gridHost]'
})
export class GridHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
