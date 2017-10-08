import {Inject, Injectable} from '@angular/core';
import {AppService} from "../services/app.service";
let Constants = require('../../backend/constants');

declare var $: any;

@Injectable()
export class ToolsService {
  constructor(@Inject('isBrowser') private isBrowser: Boolean, private appService: AppService) {
  }
}
