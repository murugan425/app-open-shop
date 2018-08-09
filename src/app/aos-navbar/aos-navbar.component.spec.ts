import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AosNavbarComponent } from './aos-navbar.component';

describe('AosNavbarComponent', () => {
  let component: AosNavbarComponent;
  let fixture: ComponentFixture<AosNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AosNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AosNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
