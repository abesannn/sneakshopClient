import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoNewAdminComponent } from './tipoproducto-new-admin.component';

describe('TipoproductoNewAdminComponent', () => {
  let component: TipoproductoNewAdminComponent;
  let fixture: ComponentFixture<TipoproductoNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoproductoNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
