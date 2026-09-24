import { Component, input, model, output } from '@angular/core';

export interface Tab<TId extends string = string> {
  id: TId;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.html',
})
export class Tabs<T extends Tab> {
  tabs = input.required<readonly T[]>();

  activeTab = model<T['id']>();

  tabChange = output<T>();

  selectTab(tab: T): void {
    if (tab.disabled || tab.id === this.activeTab()) {
      return;
    }

    this.activeTab.set(tab.id);
    this.tabChange.emit(tab);
  }
}