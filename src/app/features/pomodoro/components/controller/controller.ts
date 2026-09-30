import { Component, inject } from '@angular/core';
import { Settings } from '@core/config';
import { ActionIcon } from '@shared/components/action-icon/action-icon';
import { Tab, Tabs } from '@shared/components/tabs/tabs';
import { ModalService } from '@shared/services/modal/modal-service';
import { SettingsModal } from '../modals/settings/settings';
import { ControllerService } from '@features/pomodoro/services/controller/controller.service';

@Component({
  imports: [ActionIcon, Tabs],
  selector: 'app-controller',
  templateUrl: './controller.html',
})
export class Controller {
  private modal = inject(ModalService)
  protected controllerService = inject(ControllerService)
  
  onTabChange(tab: Tab<keyof typeof Settings.counterTabs>): void {
    this.controllerService.onTabChange(Settings.counterTabs[tab.id])
  }

  async onOpenSettings() {
    this.modal.open(SettingsModal, {})
  }
}
