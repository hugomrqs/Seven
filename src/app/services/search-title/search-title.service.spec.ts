import { TestBed } from '@angular/core/testing';

import { SearchTitleService } from './search-title.service';

describe('SearchTilteService', () => {
  let service: SearchTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
