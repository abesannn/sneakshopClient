import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoNewAdminComponent } from './producto-new-admin.component';

describe('ProductoNewAdminComponent', () => {
  let component: ProductoNewAdminComponent;
  let fixture: ComponentFixture<ProductoNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
