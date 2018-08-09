import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AosHomeComponent } from './aos-home.component';

describe('AosHomeComponent', () => {
  let component: AosHomeComponent;
  let fixture: ComponentFixture<AosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
