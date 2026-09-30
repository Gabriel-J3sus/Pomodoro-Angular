import { Service, signal } from '@angular/core';
import { Settings } from '@core/config';

export type ControllerTab = (typeof Settings.counterTabs)[keyof typeof Settings.counterTabs]

@Service()
export class ControllerService {
  tabs = Object.values(Settings.counterTabs);
  initialTab = Settings.counterTabs.pomodoro;

  currentTab = signal<ControllerTab>(Settings.counterTabs.pomodoro)

  onTabChange(tab: ControllerTab): void {
    this.currentTab.set(tab)
  }
}
