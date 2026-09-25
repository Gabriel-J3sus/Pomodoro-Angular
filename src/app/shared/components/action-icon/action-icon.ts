import { Component, computed, input } from '@angular/core';
import { Button } from '../button/button';
import { NgIcon } from '@ng-icons/core'; // Move provideIcons usage here
import { ActionIconSizeMapKeys, ActionIconVariant, getActionIconStyles } from './action-icon.styles';
import { ButtonSize, ButtonVariant } from '../button/button.styles';
import { Settings } from '@core/config';

@Component({
  selector: 'app-action-icon',
  standalone: true,
  imports: [Button, NgIcon],
  templateUrl: './action-icon.html',
})
export class ActionIcon {
  readonly icon = input<string>('');
  readonly iconSize = input<ActionIconSizeMapKeys>('md'); 
  readonly size = input<ButtonSize>('md'); 
  readonly variant = input<ActionIconVariant>('primary');
  readonly buttonVariant = input<ButtonVariant>('primary');
  readonly type = input<HTMLButtonElement['type']>('button');
  readonly class = input<string>(''); 
  
  protected readonly computedIconSize = computed(() => Settings.iconSizeMap[this.iconSize()]);

  // Computed signal automatically updates when any dependency changes
  protected readonly actionIconClass = computed(() => getActionIconStyles(
    this.variant(),
    this.class()
  ));
}