import { Component, inject, input } from '@angular/core';
import { ModalRef } from '@shared/services/modal/modal-ref';
import { NgIcon } from '@ng-icons/core';
import { Settings } from '@core/config';

@Component({
  imports: [NgIcon],
  selector: 'app-modal',
  templateUrl: './modal.html',
})
export class Modal {
  dismissable = input(false)
  title = input('')
  protected iconSizeMap = Settings.iconSizeMap

  private readonly modalRef = inject(ModalRef)
  
  onDismiss() {
    this.modalRef.close();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onDismiss()
    }
  }

}
