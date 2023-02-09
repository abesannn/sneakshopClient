import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoFinderComponent } from './tipoproducto-finder.component';

describe('TipoproductoFinderComponent', () => {
  let component: TipoproductoFinderComponent;
  let fixture: ComponentFixture<TipoproductoFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoproductoFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoproductoFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
