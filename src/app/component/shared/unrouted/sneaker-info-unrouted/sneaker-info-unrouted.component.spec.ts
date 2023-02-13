import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerInfoUnroutedComponent } from './sneaker-info-unrouted.component';

describe('SneakerInfoUnroutedComponent', () => {
  let component: SneakerInfoUnroutedComponent;
  let fixture: ComponentFixture<SneakerInfoUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerInfoUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakerInfoUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
