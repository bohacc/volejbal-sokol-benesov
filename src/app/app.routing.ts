import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home.component';
import {AboutUs} from "./about-us/about-us.component";
import {Statistics} from "./statistics/statistics.component";
import {MatchSchedule} from "./match-schedule/match-schedule.component";
import {Matches} from "./matches/matches.component";
import {Players} from "./players/players.component";
import {Contact} from "./contact/contact.component";
import {Login} from "./login/login.component";

let title = 'Volejbal Sokol Benešov';

const appRoutes: Routes = [
  //{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: '', component: Home, data: {title: title}},
  {path: 'home', component: Home, data: {title: title}},
  {path: 'about-us', component: AboutUs, data: {title: title}},
  {path: 'contact', component: Contact, data: {title: title}},
  {path: 'matches', component: Matches, data: {title: title}},
  {path: 'match-schedule', component: MatchSchedule, data: {title: title}},
  {path: 'statistics', component: Statistics, data: {title: title}},
  {path: 'players', component: Players, data: {title: title}},
  {path: 'login', component: Login, data: {title: title}},
  {path: '*', component: Home, data: {title: title}},
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
