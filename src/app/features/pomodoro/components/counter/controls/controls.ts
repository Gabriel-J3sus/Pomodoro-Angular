import { Component, inject } from '@angular/core';
import { CounterService } from '@features/pomodoro/services/counter.service';
import { Button } from '@shared/components/button/button';

@Component({
  imports: [Button],
  selector: 'app-controls',
  templateUrl: './controls.html',
})
export class Controls {
  private readonly CounterService = inject(CounterService);

  protected readonly isRunning = this.CounterService.isRunning;

  startTimer() {
    this.CounterService.start();
  }

  stopTimer() {
    this.CounterService.stop();
  }

  resetTimer() {
    this.CounterService.reset();
  }
}
