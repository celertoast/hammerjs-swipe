import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appGesture]'
})
export class GestureDirective {

  @Output() doubleTap = new EventEmitter();
  @Output() tripleTap = new EventEmitter();
  
  constructor() { }

  @HostListener('tap', ['$event'])
  onTap(e: any) {
    if(e.tapCount === 2) {
      this.doubleTap.emit(e);
    }
    if (e.tapCount === 3) {
      this.tripleTap.emit(e);
    }
  }
}
