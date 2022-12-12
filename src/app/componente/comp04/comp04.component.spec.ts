import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp04Component } from './comp04.component';

describe('Comp04Component', () => {
  let component: Comp04Component;
  let fixture: ComponentFixture<Comp04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
