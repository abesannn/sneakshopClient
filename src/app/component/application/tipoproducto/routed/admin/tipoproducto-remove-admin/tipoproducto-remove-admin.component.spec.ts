import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoRemoveAdminComponent } from './tipoproducto-remove-admin.component';

describe('TipoproductoRemoveAdminComponent', () => {
  let component: TipoproductoRemoveAdminComponent;
  let fixture: ComponentFixture<TipoproductoRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoproductoRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
