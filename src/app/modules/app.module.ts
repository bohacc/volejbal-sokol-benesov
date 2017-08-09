import { CommonModule } from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from '../components/main/main.component';
import {Home} from '../components/home/home.component';
import {appRoutingProviders, routing} from '../app.routing';
import {AppService} from "../services/app.service";
import {ToolsService} from "../services/tools.service";
import {ApiService} from "../services/api.service";
import {Login} from "../components/login/login.component";
import {Header} from "../components/header/header.component";
import {Footer} from "../components/footer/footer.component";
import {Contact} from "../components/contact/contact.component";
import {Matches} from "../components/matches/matches.component";
import {MatchSchedule} from "../components/match-schedule/match-schedule.component";
import {Statistics} from "../components/statistics/statistics.component";
import {AboutUs} from "../components/about-us/about-us.component";
import {Players} from "../components/players/players.component";
import {CSlider} from "../components/cslider/cslider.component";

@NgModule({
  declarations: [
    MainComponent,
    Home,
    Header,
    Footer,
    Contact,
    Matches,
    MatchSchedule,
    Statistics,
    AboutUs,
    Players,
    Login,
    CSlider
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    // TransferHttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ApiService,
    ToolsService,
    AppService,
    { provide: LOCALE_ID, useValue: 'cs-CZ' }
  ],
  exports: [
    MainComponent
  ]
})
export class AppModule { }
