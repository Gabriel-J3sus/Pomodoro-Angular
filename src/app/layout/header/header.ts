import { Component } from '@angular/core';
import { Settings } from '@core/config';

@Component({
  imports: [],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  navigateAbout(): void {
    window.open(Settings.links.AboutUrl, '_blank', 'noopener,noreferrer');
  }
}
