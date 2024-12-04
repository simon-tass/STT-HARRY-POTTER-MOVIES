import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieListService } from './services/movie-list.service';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { Movie } from '../shared/models/movie.model';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { MovieFilters } from '../shared/models/movie-filters.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieFilterComponent, MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  #movieListService: MovieListService = inject(MovieListService);

  subscriptionList: Subscription[] = [];

  movieList: Movie[] = [];
  movieListFiltered: Movie[] = [];

  ngOnInit(): void {
    this.subscriptionList.push(
      this.#movieListService.getMoviesList$().subscribe((data) => {
        this.movieList = this.movieListFiltered = data;
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptionList.forEach((sub) => sub.unsubscribe());
  }

  /**
   * Filter movie list by title and release date
   * @param movieFilters 
   */
  filterMovies(movieFilters: MovieFilters) {
    this.movieListFiltered = this.movieList.filter((movie: Movie) => {
      const release_year = movie.release_date?.split('-')[0] ?? '';

      return (
        movie.title?.toUpperCase().includes(movieFilters.title?.toUpperCase() ?? '') &&
        release_year.includes(movieFilters.releaseYear?.toString() ?? '')
      );
    })
  }

}
