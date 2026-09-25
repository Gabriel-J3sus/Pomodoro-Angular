import { Component, inject } from '@angular/core';
import { Settings } from '@core/config';
import { ActionIcon } from '@shared/components/action-icon/action-icon';
import { Tab, Tabs } from '@shared/components/tabs/tabs';
import { ModalService } from '@shared/services/modal/modal-service';
import { SettingsModal } from '../modals/settings/settings';

@Component({
  imports: [ActionIcon, Tabs],
  selector: 'app-controller',
  templateUrl: './controller.html',
})
export class Controller {
  protected tabs = Settings.counterTabs;
  private modal = inject(ModalService)

  onTabChange(tab: Tab<typeof Settings.counterTabs[number]['id']>): void {
    console.log('Tab changed:', tab);
  }

  async onOpenSettings() {
    this.modal.open(SettingsModal, {})
  }
}
