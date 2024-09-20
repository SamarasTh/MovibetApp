import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../service/movie.service';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
  ]
  ,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  movies: any[] = [];
  imgUrl?: string;

  private destroy$ = new Subject<void>();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
this.searchMovies('love');
  }

  onSearch() {
    if (!(this.searchQuery.length >= 3)) return;
    this.searchMovies(this.searchQuery);
  }

  searchMovies(query: string) {
    this.movieService.searchMovies(query)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(response => {
        console.log(response.results, 'movies')
        this.movies = response.results;
      });
  }

  getImageUrl(posterPath: string) {
    return this.movieService.getImageUrl(posterPath);
  }

  toggleMovieDetails(movieId: number): void {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
