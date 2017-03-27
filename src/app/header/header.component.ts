import {Component, ElementRef} from "@angular/core";
import {isBrowser} from "angular2-universal";

declare var $: any;

@Component({
  selector: 'header',
  templateUrl: 'header.template.html'
})

export class Header {
  activate: Boolean;
  isBrowser: Boolean;
  isServer: Boolean;

  constructor (private _elRef: ElementRef) {
    this.isBrowser = isBrowser;
    this.isServer = !isBrowser;
  }

  ngOnInit() {
    if (isBrowser) {
      $(require('../../../tools/jquery.js'));
      $(require('../../../tools/bootstrap.js'));
    }
  }
}
