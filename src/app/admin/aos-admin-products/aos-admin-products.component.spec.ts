import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AosAdminProductsComponent } from './aos-admin-products.component';

describe('AosAdminProductsComponent', () => {
  let component: AosAdminProductsComponent;
  let fixture: ComponentFixture<AosAdminProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AosAdminProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AosAdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
