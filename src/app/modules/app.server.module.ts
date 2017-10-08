import { NgModule, ApplicationRef, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';

// import { ServerTransferStateModule } from './transfer-state/server-transfer-state.module';
// import { ServerTransferStateModule, TransferState } from '@nglibs/universal-transfer-state';
import { AppModule } from './app.module';

// import { TransferState } from './transfer-state/transfer-state';

import { MainComponent } from '../components/main/main.component';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
//import {ServerTransferStateModule} from "./transfer-state/server-transfer-state.module";

declare var Zone: {current: any};

export function getRequest() {
  const req = Zone.current.get('req') || {};
  return req;
}
export function getResponse() {
  return Zone.current.get('res') || {};
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
        appId: 'cli-universal'
    }),
    ServerModule,
    //ServerTransferStateModule,
    AppModule
  ],
  bootstrap: [
    MainComponent
  ],
  providers: [
    /*{
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useFactory: boot,
      deps: [
        TransferState,
        ApplicationRef
      ]
    },*/
    { provide: 'isBrowser', useValue: false },
    { provide: 'isServer', useValue: true },
    { provide: 'req', useFactory: getRequest },
    { provide: 'res', useFactory: getResponse },
  ]
})
export class AppServerModule {
  /*constructor(private readonly transferState: TransferState) {
  }
  ngOnBootstrap = () => {
    this.transferState.inject();
  }*/
}
