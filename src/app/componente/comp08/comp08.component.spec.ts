import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp08Component } from './comp08.component';

describe('Comp08Component', () => {
  let component: Comp08Component;
  let fixture: ComponentFixture<Comp08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
