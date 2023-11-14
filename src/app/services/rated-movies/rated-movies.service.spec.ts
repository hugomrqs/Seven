import { TestBed } from '@angular/core/testing';

import { RatedMoviesService } from './rated-movies.service';

describe('RatedMoviesService', () => {
  let service: RatedMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatedMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
