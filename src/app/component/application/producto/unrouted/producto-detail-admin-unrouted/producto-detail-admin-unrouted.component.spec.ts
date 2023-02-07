import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetailAdminUnroutedComponent } from './producto-detail-admin-unrouted.component';

describe('ProductoDetailAdminUnroutedComponent', () => {
  let component: ProductoDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<ProductoDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
