import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultPageComponent } from './search-result-page.component';

describe('SearchResultPageComponent', () => {
  let component: SearchResultPageComponent;
  let fixture: ComponentFixture<SearchResultPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultPageComponent]
    });
    fixture = TestBed.createComponent(SearchResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
