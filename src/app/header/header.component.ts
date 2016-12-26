import {Component, ElementRef} from "@angular/core";
import {isBrowser} from "angular2-universal";

declare var $: any;

@Component({
  selector: 'header',
  templateUrl: 'header.template.html'
})

export class Header {
  activate: Boolean;

  constructor (private _elRef: ElementRef) {

  }

  ngOnInit() {
    if (isBrowser) {
      $(require('../../../tools/jquery.js'));
      $(require('../../../tools/bootstrap.js'));
    }
  }
}
