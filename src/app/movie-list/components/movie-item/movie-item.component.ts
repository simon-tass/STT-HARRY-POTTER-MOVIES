import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [DatePipe, RouterModule, DurationPipe],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() movie: Movie | undefined;
}
