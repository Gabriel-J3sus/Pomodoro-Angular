import { computed, effect, inject, linkedSignal, OnDestroy, Service, signal } from '@angular/core';
import { ControllerService } from '../controller/controller.service';
import { SettingsService } from '../settings/settings.service';


@Service()
export class CounterService implements OnDestroy {
  protected readonly controllerService = inject(ControllerService);
  private readonly settingsService = inject(SettingsService)

  initialTime = computed(() => {
    const tab = this.controllerService.currentTab();
    const settings = this.settingsService.timerSettings();

    return settings[tab.id] * 60;
  });

  timeLeft = linkedSignal(() => this.initialTime());

  isRunning = signal(false);

  private intervalId = null as number | null;

  constructor() {
    // This is the legal place to run side-effects when the tab changes!
    effect(() => {
      // We read the currentTab signal so this effect tracks it
      this.controllerService.currentTab();
      
      // Stop the timer whenever the tracked tab changes
      this.stop();
    });
  }

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
    this.timeLeft.set(this.initialTime());
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
