import { TestBed } from '@angular/core/testing';
import { ModalRef } from './modal-ref';

describe('ModalRef', () => {
  let service: ModalRef;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalRef);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
