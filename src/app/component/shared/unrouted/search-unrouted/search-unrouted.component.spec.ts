import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUnroutedComponent } from './search-unrouted.component';

describe('SearchUnroutedComponent', () => {
  let component: SearchUnroutedComponent;
  let fixture: ComponentFixture<SearchUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
