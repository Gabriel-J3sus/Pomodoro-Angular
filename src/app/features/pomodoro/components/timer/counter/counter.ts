import { Component, inject } from '@angular/core';
import { ActionIcon } from '@shared/components/action-icon/action-icon';
import { Controls } from '../controls/controls';
import { Timer } from '../../../services/timer.service';

@Component({
  imports: [ActionIcon, Controls],
  selector: 'app-counter',
  templateUrl: './counter.html',
})
export class Counter {
  protected readonly timeLeft = inject(Timer).formattedTimeLeft;
}
