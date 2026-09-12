import { Component } from '@angular/core';
import { Settings } from '../../core/config';

@Component({
  imports: [],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class HeaderComponent {
  navigateAbout(): void {
    window.open(Settings.links.AboutUrl, '_blank', 'noopener,noreferrer');
  }
}
