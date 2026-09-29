import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Settings } from '@core/config';
import { Input } from '@shared/components/input/input';

@Component({
  imports: [ReactiveFormsModule, Input],
  selector: 'app-timer-settings',
  templateUrl: './timer-settings.html',
})
export class TimerSettingsForm {
  protected tabs = Settings.counterTabs

  readonly form = input.required<FormGroup>();

}
