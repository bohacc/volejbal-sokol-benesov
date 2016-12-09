import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home.component';

const appRoutes: Routes = [
  //{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: '',
    component: Home,
    data: {
      title: 'Volejbal Sokol Benešov'
    }
  },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
