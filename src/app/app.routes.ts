import { Routes } from '@angular/router';
import { App } from './app.component';
import { MainLayoutComponent } from './layout/index.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Pomodoro Timer',
    component: MainLayoutComponent,
    children: [
      { path: '', component: App },
    ]
  },

  {
    path: '**',
    redirectTo: '',
  }
];
