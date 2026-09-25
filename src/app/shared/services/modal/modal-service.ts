import {
  inject,
  Service,
  Injector,
  inputBinding,
  Type,
  ViewContainerRef,
} from '@angular/core';

import { ModalRef } from './modal-ref';

@Service()
export class ModalService {
  private container?: ViewContainerRef;

  private readonly injector = inject(Injector);

  register(container: ViewContainerRef) {
    // Stores the ViewContainerRef that acts as the insertion point
    // for dynamically created modal components.
    this.container = container;
  }

  open<TData, TResult>(
    component: Type<unknown>,
    data: TData,
  ): Promise<TResult> {
    if (!this.container) {
      throw new Error(
        'ModalHost has not been initialized.',
      );
    }

    // Creates a reference for this specific modal instance.
    // It is responsible for:
    // - exposing the Promise that the caller will await
    // - allowing the modal component to close itself
    // - destroying the dynamically created component
    const modalRef = new ModalRef<TResult>();

    // Creates a child injector specifically for this modal.
    //
    // We provide the ModalRef instance through Angular's DI system,
    // allowing the dynamically created component to inject the same
    // ModalRef instance and call modalRef.close(result).
    const modalInjector = Injector.create({
      providers: [
        {
          provide: ModalRef,
          useValue: modalRef,
        },
      ],
      parent: this.injector,
    });

    // Dynamically creates the requested component inside the
    // ViewContainerRef registered by the ModalHost.
    //
    // inputBinding() connects the data passed to open() with the
    // component's `data` input:
    //
    // modal.open(MyModalComponent, data)
    //              ↓
    // MyModalComponent.data()
    const componentRef =
      this.container.createComponent(
        component,
        {
          injector: modalInjector,

          bindings: [
            inputBinding(
              'data',
              () => data,
            ),
          ],
        },
      );

    // Gives the ModalRef access to the created component so that
    // it can destroy the component when the modal is closed.
    modalRef.setComponentRef(componentRef);

    // Returns the Promise associated with this modal.
    // The Promise remains pending until the modal calls:
    //
    // modalRef.close(result)
    //
    // allowing the caller to use:
    //
    // const result = await modal.open(...);
    return modalRef.result();
  }
}