import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownRegisterPageComponent } from './dropdown-register-page.component';

describe('DropdownRegisterPageComponent', () => {
  let component: DropdownRegisterPageComponent;
  let fixture: ComponentFixture<DropdownRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownRegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
