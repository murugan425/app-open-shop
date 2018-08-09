import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AosCartComponent } from './aos-cart.component';

describe('AosCartComponent', () => {
  let component: AosCartComponent;
  let fixture: ComponentFixture<AosCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AosCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AosCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
