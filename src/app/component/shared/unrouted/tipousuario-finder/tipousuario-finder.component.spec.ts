import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioFinderComponent } from './tipousuario-finder.component';

describe('TipousuarioFinderComponent', () => {
  let component: TipousuarioFinderComponent;
  let fixture: ComponentFixture<TipousuarioFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
