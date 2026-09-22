import { Component } from '@angular/core';
import { Counter } from './components/counter/counter';
import { Controller } from './components/controller/controller';

@Component({
  imports: [Counter, Controller],
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.html',
})
export class Pomodoro {}
