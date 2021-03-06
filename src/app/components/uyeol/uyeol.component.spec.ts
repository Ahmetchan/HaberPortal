/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyeolComponent } from './uyeol.component';

describe('UyeolComponent', () => {
  let component: UyeolComponent;
  let fixture: ComponentFixture<UyeolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
