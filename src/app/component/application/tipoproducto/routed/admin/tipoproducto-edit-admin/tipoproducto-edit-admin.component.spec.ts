import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoEditAdminComponent } from './tipoproducto-edit-admin.component';

describe('TipoproductoEditAdminComponent', () => {
  let component: TipoproductoEditAdminComponent;
  let fixture: ComponentFixture<TipoproductoEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoproductoEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
