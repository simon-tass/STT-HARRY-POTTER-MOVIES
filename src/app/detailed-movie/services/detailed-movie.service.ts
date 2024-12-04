import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DetailedMovie } from '../../shared/models/detailed-movie.model';

@Injectable({
  providedIn: 'root'
})
export class DetailedMovieService {

  #httpClient: HttpClient = inject(HttpClient);

  private movieSubject = new BehaviorSubject<DetailedMovie>({});

  constructor() { }

  getDetailedMovie(idMovie: string) {
    this.#httpClient
      .get<DetailedMovie>('/movies/' + idMovie)
      .subscribe((movie) => {
        this.movieSubject.next(movie);
      });
  }

  getDetailedMovie$(): Observable<DetailedMovie> {
    return this.movieSubject;
  }
}
