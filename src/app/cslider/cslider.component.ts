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
      //$(require('../../../src/tools/jquery'));
      //$(require('../../../src/tools/modernizr.custom'));
      /*$(require('../../../src/tools/respond.min'));
      $(require('../../../src/tools/bootstrap'));
      $(require('../../../src/tools/jquery.bxslider'));
      $(require('../../../src/tools/jquery.inview'));
      $(require('../../../src/tools/jquery.mixitup'));*/
      //$(require('../../../src/tools/jquery.cslider'));
      //$(this._elRef.nativeElement).cslider();
    }
  }
}
