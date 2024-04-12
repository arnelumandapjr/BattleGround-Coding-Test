import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home - BattleGround Coding Test',
    component: HomeComponent,
  },
  {
    path: 'users',
    title: 'Users - BattleGround Coding Test',
    loadComponent: () =>
      import('./pages/user/user.component').then((m) => m.UserComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
