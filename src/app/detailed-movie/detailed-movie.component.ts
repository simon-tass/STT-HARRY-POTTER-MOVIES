import { Component, inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailedMovie } from '../shared/models/detailed-movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailedMovieService } from './services/detailed-movie.service';
import { PricePipe } from '../shared/pipes/price.pipe';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { PersonPipe } from '../shared/pipes/person.pipe';

@Component({
  selector: 'app-detailed-movie',
  standalone: true,
  imports: [PricePipe, DurationPipe, PersonPipe],
  templateUrl: './detailed-movie.component.html',
  styleUrl: './detailed-movie.component.css'
})
export class DetailedMovieComponent implements OnDestroy {

  #detailedMovieService: DetailedMovieService = inject(DetailedMovieService);

  subscriptionList: Subscription[] = [];

  detailedMovie: DetailedMovie | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.paramMap.get('movieId');

    this.subscriptionList.push(
      this.#detailedMovieService.getDetailedMovie$().subscribe((data) => {
        this.detailedMovie = data;
      }),
    );

    if(!movieId) {
      this.goBack();
    } else {
      this.#detailedMovieService.getDetailedMovie(movieId);
    }

  }

  ngOnDestroy() {
    this.subscriptionList.forEach((sub) => sub.unsubscribe());
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
