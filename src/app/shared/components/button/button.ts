import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { getButtonStyles, type ButtonSize, type ButtonVariant } from './button.styles';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly type = input<HTMLButtonElement['type']>('button');
  readonly class = input<string>(''); // Allows consumers to pass ad-hoc classes

  // Computed signal automatically updates when any dependency changes
  protected readonly buttonClass = computed(() => getButtonStyles(
    this.variant(), 
    this.size(), 
    this.class()
  ));
}