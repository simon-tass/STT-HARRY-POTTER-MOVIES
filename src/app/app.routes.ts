import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/movie-list',
        pathMatch: 'full',
    },
    {
        path: 'movie-list',
        loadComponent: () =>
            import('./movie-list/movie-list.component').then((mod) => mod.MovieListComponent),
    },
    {
        path: 'detailedMovie/:movieId',
        loadComponent: () =>
            import('./detailed-movie/detailed-movie.component').then((mod) => mod.DetailedMovieComponent),
    },
];
