import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AosOrdersComponent } from './aos-orders.component';

describe('AosOrdersComponent', () => {
  let component: AosOrdersComponent;
  let fixture: ComponentFixture<AosOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AosOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AosOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
