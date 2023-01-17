import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFinderComponent } from './usuario-finder.component';

describe('UsuarioFinderComponent', () => {
  let component: UsuarioFinderComponent;
  let fixture: ComponentFixture<UsuarioFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
