import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-page]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

