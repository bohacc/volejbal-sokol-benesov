import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
// import { BrowserTransferStateModule } from './transfer-state/browser-transfer-state.module';
// import { BrowserTransferStateModule } from '@nglibs/universal-transfer-state';

import { MainComponent } from '../components/main/main.component';
//import {BrowserTransferStateModule} from "./transfer-state/browser-transfer-state.module";

// Dummy methods for browser - to retain symmetry with serverside requests
export function getRequest() {
  // the request object only lives on the server
  return { headers: null};
}
export function getResponse() {
  // the response object is sent as the index.html and lives on the server
  return {};
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
        appId: 'cli-universal'
    }),
    //BrowserTransferStateModule,
    AppModule
  ],
  bootstrap: [
    MainComponent
  ],
  providers: [
    { provide: 'isBrowser', useValue: true },
    { provide: 'isServer', useValue: false },
    { provide: 'req', useFactory: getRequest },
    { provide: 'res', useFactory: getResponse },
    { provide: 'REQUEST', useValue: {}}
  ]
})
export class AppBrowserModule { }
