import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp06Component } from './comp06.component';

describe('Comp06Component', () => {
  let component: Comp06Component;
  let fixture: ComponentFixture<Comp06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
