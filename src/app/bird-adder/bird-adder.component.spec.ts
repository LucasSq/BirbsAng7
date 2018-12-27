/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BirdAdderComponent } from './bird-adder.component';

describe('BirdAdderComponent', () => {
  let component: BirdAdderComponent;
  let fixture: ComponentFixture<BirdAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
