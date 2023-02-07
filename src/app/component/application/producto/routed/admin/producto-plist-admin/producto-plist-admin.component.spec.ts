import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPlistAdminComponent } from './producto-plist-admin.component';

describe('ProductoPlistAdminComponent', () => {
  let component: ProductoPlistAdminComponent;
  let fixture: ComponentFixture<ProductoPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
