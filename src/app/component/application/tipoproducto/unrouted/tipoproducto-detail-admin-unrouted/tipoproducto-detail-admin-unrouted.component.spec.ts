import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoDetailAdminUnroutedComponent } from './tipoproducto-detail-admin-unrouted.component';

describe('TipoproductoDetailAdminUnroutedComponent', () => {
  let component: TipoproductoDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<TipoproductoDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoproductoDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
