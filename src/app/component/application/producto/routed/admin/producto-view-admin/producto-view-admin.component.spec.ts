import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoViewAdminComponent } from './producto-view-admin.component';

describe('ProductoViewAdminComponent', () => {
  let component: ProductoViewAdminComponent;
  let fixture: ComponentFixture<ProductoViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
