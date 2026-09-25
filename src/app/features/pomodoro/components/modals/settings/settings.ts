import { Component, inject, input, } from '@angular/core';
import { ModalRef } from '@shared/services/modal/modal-ref';
import { Modal } from '@shared/components/modal/modal/modal';
import { Expandable } from '@shared/components/expandable/expandable';
import { Button } from '@shared/components/button/button';
import { SoundSettingsForm } from '../../forms/sound-settings/sound-settings.form';
import { TimerSettingsForm } from '../../forms/timer-settings/timer-settings.form';
import { ThemeSettingsForm } from '../../forms/theme-settings/theme-settings.form';
import { NgComponentOutlet } from '@angular/common'; 

@Component({
  imports: [Modal, Expandable, Button, NgComponentOutlet],
  selector: 'app-settings-modal',
  templateUrl: './settings.html',
  standalone: true
})
export class SettingsModal {
  protected tabs = [
    {
      id: 'timer',
      label: 'Timer',
      icon: 'remixTimerFill',
      component: TimerSettingsForm
    },
    {
      id: 'sound',
      label: 'Sound',
      icon: 'remixSoundModuleFill',
      component: SoundSettingsForm
    },
      {
      id: 'theme',
      label: 'Theme',
      icon: 'remixPaletteFill',
      component: ThemeSettingsForm
    }
  ]
  // Params passaed when openning the modal
  readonly data = input.required()

  private readonly modalRef = inject(ModalRef)

  async onClose() {
    this.modalRef.close()
  }

  async onSave() {
    console.log("AAAA")
    this.onClose()

  }
}
