import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
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

export class MainLayout {}