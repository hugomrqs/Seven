import { TestBed } from '@angular/core/testing';

import { RateMovieService } from './rate-movie.service';

describe('RateMovieService', () => {
  let service: RateMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RateMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
