import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentPayComponent } from './installment-pay.component';

describe('InstallmentPayComponent', () => {
  let component: InstallmentPayComponent;
  let fixture: ComponentFixture<InstallmentPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallmentPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallmentPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
