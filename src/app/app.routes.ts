import { Routes } from '@angular/router';
import { MainLayout } from '@layout/index';

export const routes: Routes = [
  {
    path: 'timer',
    title: 'Pomodoro Timer',
    component: MainLayout,
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
