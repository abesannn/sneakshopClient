/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TipousuarioDetailAdminUnroutedComponent } from './tipousuario-detail-admin-unrouted.component';

describe('TipousuarioDetailAdminUnroutedComponent', () => {
  let component: TipousuarioDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<TipousuarioDetailAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipousuarioDetailAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
