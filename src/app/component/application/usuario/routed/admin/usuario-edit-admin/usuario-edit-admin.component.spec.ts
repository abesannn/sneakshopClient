import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditAdminComponent } from './usuario-edit-admin.component';

describe('UsuarioEditAdminComponent', () => {
  let component: UsuarioEditAdminComponent;
  let fixture: ComponentFixture<UsuarioEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
