import {Inject, Injectable} from '@angular/core';
let Constants = require('../../backend/constants');

@Injectable()
export class AppService {
  store: any;

  constructor(@Inject('isBrowser') private isBrowser: Boolean) {
    this.store = {
    };
  }
  getStore() {
    return this.store;
  }
  setPath(code: string) {
    this.store.path = code;
  }
  getPath() {
    return this.store.path;
  }
  getRootPath() {
    return this.isBrowser ? '' : Constants.ROOT_PATH;
  }
}
