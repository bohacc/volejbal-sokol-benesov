import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { Home } from './components/home/home.component';
import {Login} from "./components/login/login.component";

let title = 'Volejbal Sokol Benešov';

const appRoutes: Routes = [
  {path: '', component: Home, data: {title: title}},
/*  {path: 'home', component: Home, data: {title: title}},
  {path: 'about-us', component: AboutUs, data: {title: title}},
  {path: 'contact', component: Contact, data: {title: title}},
  {path: 'matches', component: Matches, data: {title: title}},
  {path: 'match-schedule', component: MatchSchedule, data: {title: title}},
  {path: 'statistics', component: Statistics, data: {title: title}},
  {path: 'players', component: Players, data: {title: title}},*/
  {path: 'login', component: Login, data: {title: title}},
  {path: '**', component: Home, data: {title: title}},
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  appRoutes,
  {
    useHash: false,
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled'
  }
);
