import { Component, inject } from '@angular/core';
import { ModalRef } from '@shared/services/modal/modal-ref';
import { Modal } from '@shared/components/modal/modal/modal';

@Component({
  imports: [Modal],
  selector: 'app-settings-modal',
  templateUrl: './settings.html',
  standalone: true
})
export class SettingsModal {
  private readonly modalRef = inject(ModalRef)

  async onClose() {
    this.modalRef.close()
  }

  // async onSave() {
  //   const dd = await this.modalRef.result()
  //   dd.name
  // }
}
