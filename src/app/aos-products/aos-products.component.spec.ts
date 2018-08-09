import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AosProductsComponent } from './aos-products.component';

describe('AosProductsComponent', () => {
  let component: AosProductsComponent;
  let fixture: ComponentFixture<AosProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AosProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AosProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
