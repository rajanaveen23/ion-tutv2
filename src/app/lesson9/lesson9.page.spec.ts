import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson9Page } from './lesson9.page';

describe('Lesson9Page', () => {
  let component: Lesson9Page;
  let fixture: ComponentFixture<Lesson9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
