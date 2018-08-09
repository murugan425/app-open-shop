import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AosCheckoutComponent } from './aos-checkout.component';

describe('AosCheckoutComponent', () => {
  let component: AosCheckoutComponent;
  let fixture: ComponentFixture<AosCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AosCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AosCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
