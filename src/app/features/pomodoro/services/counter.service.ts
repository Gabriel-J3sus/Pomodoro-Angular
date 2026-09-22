import { computed, Injectable, OnDestroy, signal } from '@angular/core';

const INITIAL_TIME = 25 * 60; // 25 minutes in seconds


@Injectable({ providedIn: 'root' })
export class CounterService implements OnDestroy {
  timeLeft = signal(INITIAL_TIME);
  isRunning = signal(false);

  private intervalId = null as number | null;

  // Automatically format seconds to MM:SS using a computed signal
  formattedTimeLeft = computed(() => {
    const minutes = Math.floor(this.timeLeft() / 60);
    const seconds = this.timeLeft() % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  });

  start() {
    console.log('Timer started');
    if (this.isRunning()) return;

    this.isRunning.set(true);
    this.intervalId = setInterval(() => {
      this.timeLeft.update((time) => {
        if (time <= 1) {
          this.stop();
          return 0
        }

        return time - 1
      })
    }, 1000)
  }

  stop() {
    console.log('Timer paused');
    this.isRunning.set(false)
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    console.log('Timer reset');
    this.stop();
    this.timeLeft.set(INITIAL_TIME);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
