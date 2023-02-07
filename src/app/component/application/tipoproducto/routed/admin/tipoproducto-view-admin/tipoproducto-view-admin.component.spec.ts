import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoViewAdminComponent } from './tipoproducto-view-admin.component';

describe('TipoproductoViewAdminComponent', () => {
  let component: TipoproductoViewAdminComponent;
  let fixture: ComponentFixture<TipoproductoViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoproductoViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
