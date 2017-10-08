import {Component, ElementRef, Inject} from "@angular/core";

declare var $: any;

@Component({
  selector: 'header',
  templateUrl: 'header.template.html'
})

export class Header {
  activate: Boolean;
  isClient: Boolean;
  isServer: Boolean;

  constructor (
    private _elRef: ElementRef,
    @Inject('isBrowser') private isBrowser: Boolean
  ) {
    this.isServer = !this.isBrowser;
  }

  ngOnInit() {
    if (this.isBrowser) {
      $(require('../../../../tools/jquery.js'));
      $(require('../../../../tools/bootstrap.js'));
    }
  }
}
