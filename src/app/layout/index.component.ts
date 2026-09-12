import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
  <body class="flex flex-col min-h-screen">
    <app-header></app-header>
    <main class="mx-auto flex-grow px-4 sm:px-6 lg:px-8">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  </body>
  `
})

export class MainLayoutComponent {}