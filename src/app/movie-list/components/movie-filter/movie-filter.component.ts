import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieFilters } from '../../../shared/models/movie-filters.model';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css'
})
export class MovieFilterComponent {

  @Output()
  movieFilters = new EventEmitter<MovieFilters>();

  public titleFilter="";
  public releaseYearFilter="";

  filterGroup = new FormGroup({
    title: new FormControl(null),
    releaseYear: new FormControl(null),
  });

  constructor() {
    this.filterGroup.valueChanges.subscribe((data) => {
      const filterValues = data;
      if(! this.filterGroup.controls.releaseYear.valid) {
        filterValues.releaseYear = null;
      }
      this.movieFilters.emit(filterValues);
    });
  }

}
