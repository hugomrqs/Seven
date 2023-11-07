import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionCarousselComponent } from './suggestion-caroussel.component';

describe('SuggestionCarousselComponent', () => {
  let component: SuggestionCarousselComponent;
  let fixture: ComponentFixture<SuggestionCarousselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionCarousselComponent]
    });
    fixture = TestBed.createComponent(SuggestionCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
