import {Directive, ElementRef} from "@angular/core";
import {isBrowser} from "angular2-universal";
declare var $: any;

@Directive({
  selector: '[cslider]',
})

export class CSlider {
  constructor(private _elRef: ElementRef) {}

  ngOnInit() {
    if (isBrowser) {
      /*$(require('../../../src/tools/jquery'));
      $(require('../../../src/tools/modernizr'));
      $(require('../../../src/tools/jquery.cslider'));
      $(this._elRef.nativeElement).cslider();*/
    }
  }
}
