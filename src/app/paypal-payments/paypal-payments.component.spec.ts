import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalPaymentsComponent } from './paypal-payments.component';

describe('PaypalPaymentsComponent', () => {
  let component: PaypalPaymentsComponent;
  let fixture: ComponentFixture<PaypalPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
