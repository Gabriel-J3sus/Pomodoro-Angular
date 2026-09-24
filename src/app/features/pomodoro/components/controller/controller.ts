import { Component } from '@angular/core';
import { Settings } from '@core/config';
import { ActionIcon } from '@shared/components/action-icon/action-icon';
import { Tab, Tabs } from '@shared/components/tabs/tabs';

@Component({
  imports: [ActionIcon, Tabs],
  selector: 'app-controller',
  templateUrl: './controller.html',
})
export class Controller {
  tabs = Settings.counterTabs;

  onTabChange(tab: Tab<typeof Settings.counterTabs[number]['id']>): void {
    console.log('Tab changed:', tab);
  }
}
