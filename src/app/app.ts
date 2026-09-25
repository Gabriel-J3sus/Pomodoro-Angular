import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalHost } from '@shared/components/modal/host/modal-host';

@Component({
  imports: [RouterOutlet, ModalHost],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
}
