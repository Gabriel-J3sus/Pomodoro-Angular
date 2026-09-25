import { Component, inject } from '@angular/core';
import { ModalRef } from '@shared/services/modal/modal-ref';

@Component({
  imports: [],
  selector: 'app-modal',
  templateUrl: './modal.html',
})
export class Modal {
  private readonly modalRef = inject(ModalRef)

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.modalRef.close();
    }
  }
}
