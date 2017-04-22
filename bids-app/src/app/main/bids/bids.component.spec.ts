/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BidsComponent } from './bids.component';

describe('BidsComponent', () => {
  let component: BidsComponent;
  let fixture: ComponentFixture<BidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
