import { Component, inject } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { Timer } from '../../../services/timer.service';

@Component({
  imports: [Button],
  selector: 'app-controls',
  styleUrl: './controls.css',
  templateUrl: './controls.html',
})
export class Controls {
  private readonly timerService = inject(Timer);

  protected readonly isRunning = this.timerService.isRunning;

  startTimer() {
    this.timerService.start();
  }

  stopTimer() {
    this.timerService.stop();
  }

  resetTimer() {
    this.timerService.reset();
  }
}
