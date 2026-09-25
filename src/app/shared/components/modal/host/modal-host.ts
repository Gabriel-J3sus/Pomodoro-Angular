import { Component, inject, viewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '@shared/services/modal/modal-service';

@Component({
  imports: [],
  selector: 'app-modal-host',
  templateUrl: './modal-host.html',
  standalone: true
})
export class ModalHost {
  private readonly container =
    viewChild.required('container', {
      read: ViewContainerRef,
    }); // finds the container that we want to render the modals

  private readonly modalService =
    inject(ModalService);

  ngAfterViewInit() { // lifecycle hook that runs once after Angular has fully initialized a component's view and its child views
    this.modalService.register(
      this.container(),
    );
  }
}