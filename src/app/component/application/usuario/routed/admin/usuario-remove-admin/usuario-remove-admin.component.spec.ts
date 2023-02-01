import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRemoveAdminComponent } from './usuario-remove-admin.component';

describe('UsuarioRemoveAdminComponent', () => {
  let component: UsuarioRemoveAdminComponent;
  let fixture: ComponentFixture<UsuarioRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
