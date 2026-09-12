import { Routes } from '@angular/router';
import { App } from './app.component';
import { MainLayoutComponent } from './layout/index.component';

export const routes: Routes = [
  {
    path: 'timer',
    title: 'Pomodoro Timer',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./features/pomodoro/pomodoro.routes').then(m => m.POMODORO_ROUTES)},
    ]
  },
  { path: '', redirectTo: 'timer', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
  }
];
