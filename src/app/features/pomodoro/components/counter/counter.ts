import { Component, inject } from '@angular/core';
import { Controls } from './controls/controls';
import { CounterService } from '@features/pomodoro/services/counter.service';

@Component({
  imports: [Controls],
  selector: 'app-counter',
  templateUrl: './counter.html',
})
export class Counter {
  protected readonly timeLeft = inject(CounterService).formattedTimeLeft;
}
