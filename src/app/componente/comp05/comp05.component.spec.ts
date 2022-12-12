import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp05Component } from './comp05.component';

describe('Comp05Component', () => {
  let component: Comp05Component;
  let fixture: ComponentFixture<Comp05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
