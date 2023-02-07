import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoPlistAdminComponent } from './tipoproducto-plist-admin.component';

describe('TipoproductoPlistAdminComponent', () => {
  let component: TipoproductoPlistAdminComponent;
  let fixture: ComponentFixture<TipoproductoPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoproductoPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
