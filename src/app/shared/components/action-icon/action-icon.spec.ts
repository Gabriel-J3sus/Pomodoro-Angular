import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionIcon } from './action-icon';

describe('ActionIcon', () => {
  let component: ActionIcon;
  let fixture: ComponentFixture<ActionIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
