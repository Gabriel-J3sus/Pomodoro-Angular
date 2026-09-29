import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.html',
})
export class ThemeSettingsForm {
    readonly form = input.required<FormGroup>();
}
