import { TestBed } from '@angular/core/testing';

import { FavoritesMoviesService } from './favorites-movies.service';

describe('FavoritesMoviesService', () => {
  let service: FavoritesMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
