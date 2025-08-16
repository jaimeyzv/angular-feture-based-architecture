import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentRepayComponent } from './installment-repay.component';

describe('InstallmentPayComponent', () => {
  let component: InstallmentRepayComponent;
  let fixture: ComponentFixture<InstallmentRepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallmentRepayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallmentRepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
