import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideIcons } from '@ng-icons/core';
import { remixSettings3Line, remixCloseLargeLine, remixArrowDownSLine, remixArrowUpSLine, remixTimerFill, remixSoundModuleFill, remixPaletteFill } from '@ng-icons/remixicon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIcons({ remixSettings3Line, remixCloseLargeLine, remixArrowDownSLine, remixArrowUpSLine,remixTimerFill, remixSoundModuleFill, remixPaletteFill })
  ]
};

