import { inject, Service, signal } from '@angular/core';
import { Settings } from '@core/config';
import { StorageService } from '@shared/services/storage/storage.service';

export type TimerSettings = {
    pomodoro: number;
    short_break: number;
    long_break: number;
  }

export type Settings = {
  timer: TimerSettings;
}

@Service()
export class SettingsService {
  private storage = inject(StorageService)
  readonly timerSettings = signal<TimerSettings>(
      this.loadTimerSettings(),
    );

  private loadTimerSettings(): TimerSettings {
    const stored = this.storage.get<TimerSettings>('timer_settings');

    return {
      pomodoro:
        stored?.pomodoro ??
        Settings.counterTabs.pomodoro.initialTime,

      short_break:
        stored?.short_break ??
        Settings.counterTabs.short_break.initialTime,

      long_break:
        stored?.long_break ??
        Settings.counterTabs.long_break.initialTime,
    };
  }

  update(newValues: Settings) {
    this.timerSettings.set(newValues.timer);

    this.storage.set<TimerSettings>('timer_settings', newValues.timer)
  }
}
