import { TestBed } from '@angular/core/testing';

import { DetailedMovieService } from './detailed-movie.service';

describe('DetailedMovieService', () => {
  let service: DetailedMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailedMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
