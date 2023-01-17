import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationUnroutedComponent } from './pagination-unrouted.component';

describe('PaginationUnroutedComponent', () => {
  let component: PaginationUnroutedComponent;
  let fixture: ComponentFixture<PaginationUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
