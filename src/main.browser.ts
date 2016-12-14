import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UniversalModule } from 'angular2-universal';

import { App } from './app/app';
import { routing, appRoutingProviders } from './app/app.routing';
import {Home} from "./app/home/home.component";
import {Header} from "./app/header/header.component";
import {Footer} from "./app/footer/footer.component";
import {Contact} from "./app/contact/contact.component";
import {Matches} from "./app/matches/matches.component";
import {MatchSchedule} from "./app/match-schedule/match-schedule.component";
import {Statistics} from "./app/statistics/statistics.component";
import {AboutUs} from "./app/about-us/about-us.component";
import {Players} from "./app/players/players.component";

@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    Home,
    Header,
    Footer,
    Contact,
    Matches,
    MatchSchedule,
    Statistics,
    AboutUs,
    Players
  ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
  ]
})
export class MainModule {}

