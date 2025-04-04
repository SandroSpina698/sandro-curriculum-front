import { Routes } from '@angular/router';
import {NotFoundComponent} from "./features/not-found/not-found.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];
