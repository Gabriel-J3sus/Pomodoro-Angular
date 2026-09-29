import { Component, inject, input, } from '@angular/core';
import { ModalRef } from '@shared/services/modal/modal-ref';
import { Modal } from '@shared/components/modal/modal/modal';
import { Expandable } from '@shared/components/expandable/expandable';
import { Button } from '@shared/components/button/button';
import { SoundSettingsForm } from '../../forms/sound-settings/sound-settings.form';
import { TimerSettingsForm } from '../../forms/timer-settings/timer-settings.form';
import { ThemeSettingsForm } from '../../forms/theme-settings/theme-settings.form';
import { NgComponentOutlet } from '@angular/common'; 
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [Modal, Expandable, Button, NgComponentOutlet, ReactiveFormsModule],
  selector: 'app-settings-modal',
  templateUrl: './settings.html',
  standalone: true
})
export class SettingsModal {
  // Params passed when openning the modal
  readonly data = input.required()

  private readonly modalRef = inject(ModalRef)

  readonly form = new FormGroup({
    timer: new FormGroup({
      pomodoro: new FormControl(''),
      short_break: new FormControl(''),
      long_break: new FormControl('')
    }),

    sound: new FormGroup({
      // sound controls
    }),

    theme: new FormGroup({
      // theme controls
    }),
  });

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
  ] as const

  async onClose() {
    this.modalRef.close()
  }

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('AAAA', this.form.getRawValue());

    this.modalRef.close(this.form.getRawValue());
  }
}
