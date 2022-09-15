import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirective1Component } from './custom-directive1.component';

describe('CustomDirective1Component', () => {
  let component: CustomDirective1Component;
  let fixture: ComponentFixture<CustomDirective1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirective1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirective1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
