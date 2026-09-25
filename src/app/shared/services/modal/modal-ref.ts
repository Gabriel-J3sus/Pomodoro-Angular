import { ComponentRef, Service } from '@angular/core';

@Service()
export class ModalRef<TResult> {

  // Stores the function that resolves the Promise returned to the caller.
  private resolvePromise!: (result: TResult) => void;

  // The Promise represents the result of this specific modal instance.
  private readonly promise = new Promise<TResult>((resolve) => {
    this.resolvePromise = resolve;
  });

  // Reference to the dynamically created modal component.
  // It is used to destroy the component when the modal closes.
  private componentRef?: ComponentRef<unknown>;

  // Called by ModalService after creating the dynamic component.
  // This gives the ModalRef control over the component's lifecycle.
  setComponentRef(componentRef: ComponentRef<unknown>) {
    this.componentRef = componentRef;
  }

  // Returns the Promise that resolves when the modal is closed.
  result(): Promise<TResult> {
    return this.promise;
  }

  // Closes the modal, resolves the caller's Promise,
  // and destroys the dynamically created component.
  close(result?: TResult) {
    this.resolvePromise(result as TResult);
    this.componentRef?.destroy();
  }
}