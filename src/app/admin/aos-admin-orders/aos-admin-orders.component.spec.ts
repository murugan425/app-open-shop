import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AosAdminOrdersComponent } from './aos-admin-orders.component';

describe('AosAdminOrdersComponent', () => {
  let component: AosAdminOrdersComponent;
  let fixture: ComponentFixture<AosAdminOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AosAdminOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AosAdminOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
