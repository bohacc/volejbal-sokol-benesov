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
      $(require('/usr/share/nginx/volejbal-sokol-benesov/src/tools/jquery'));
      $(require('/usr/share/nginx/volejbal-sokol-benesov/src/tools/modernizr'));
      $(require('/usr/share/nginx/volejbal-sokol-benesov/src/tools/jquery.cslider'));
      $(this._elRef.nativeElement).cslider();
    }
  }
}
