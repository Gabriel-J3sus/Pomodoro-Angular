import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-sound-settings',
  templateUrl: './sound-settings.html',
})
export class SoundSettingsForm {
  readonly form = input.required<FormGroup>();

}
