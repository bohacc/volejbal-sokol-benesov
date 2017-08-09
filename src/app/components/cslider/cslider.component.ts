import {Directive, ElementRef, Inject} from "@angular/core";
declare var $: any;

@Directive({
  selector: '[cslider]',
})

export class CSlider {
  constructor(
    private _elRef: ElementRef,
    @Inject('isBrowser') private isBrowser: Boolean
  ) {}

  ngOnInit() {
    if (this.isBrowser) {
      $(require('../../../../tools/jquery.js'));
      $(require('../../../../tools/modernizr'));
      $(require('../../../../tools/jquery.cslider'));
      $(this._elRef.nativeElement).cslider();
    }
  }
}
