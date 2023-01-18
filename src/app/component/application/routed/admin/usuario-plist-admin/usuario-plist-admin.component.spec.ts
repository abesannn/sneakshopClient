import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPlistAdminComponent } from './usuario-plist-admin.component';

describe('UsuarioPlistAdminComponent', () => {
  let component: UsuarioPlistAdminComponent;
  let fixture: ComponentFixture<UsuarioPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
