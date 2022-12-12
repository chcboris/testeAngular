import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp07Component } from './comp07.component';

describe('Comp07Component', () => {
  let component: Comp07Component;
  let fixture: ComponentFixture<Comp07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
