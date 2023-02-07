import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEditAdminComponent } from './producto-edit-admin.component';

describe('ProductoEditAdminComponent', () => {
  let component: ProductoEditAdminComponent;
  let fixture: ComponentFixture<ProductoEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
