import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../../shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  #httpClient: HttpClient = inject(HttpClient);

  private moviesSubject = new BehaviorSubject<Movie[]>([]);
      
  constructor() { 
    this.getAllMovies();
  }

  getAllMovies() {
    this.#httpClient
      .get<Movie[]>('/movies')
      .subscribe((movie) => {
        this.moviesSubject.next(movie);
      });
  }

  getMoviesList$(): Observable<Movie[]> {
    return this.moviesSubject;
  }

}
