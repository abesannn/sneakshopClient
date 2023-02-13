import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPlistUsuarioComponent } from './producto-plist-usuario.component';

describe('ProductoPlistUsuarioComponent', () => {
  let component: ProductoPlistUsuarioComponent;
  let fixture: ComponentFixture<ProductoPlistUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoPlistUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoPlistUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
