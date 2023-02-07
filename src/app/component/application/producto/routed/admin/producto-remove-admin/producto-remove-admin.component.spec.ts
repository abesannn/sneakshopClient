import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRemoveAdminComponent } from './producto-remove-admin.component';

describe('ProductoRemoveAdminComponent', () => {
  let component: ProductoRemoveAdminComponent;
  let fixture: ComponentFixture<ProductoRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
