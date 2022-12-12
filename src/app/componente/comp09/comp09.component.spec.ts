import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp09Component } from './comp09.component';

describe('Comp09Component', () => {
  let component: Comp09Component;
  let fixture: ComponentFixture<Comp09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
