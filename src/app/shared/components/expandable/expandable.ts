import { Component, input, model } from '@angular/core';
import { Settings } from '@core/config';
import { IconType, NgIcon } from '@ng-icons/core';

@Component({
  imports: [NgIcon],
  selector: 'app-expandable',
  templateUrl: './expandable.html',
})
export class Expandable {
  protected iconSizeMap = Settings.iconSizeMap

  icon = input<IconType>()
  title = input()
  isExpanded = model<boolean>(false)

  onExpand() {
    this.isExpanded.set(true)
  }

  onCollapse() {
    this.isExpanded.set(false)
  }

}
