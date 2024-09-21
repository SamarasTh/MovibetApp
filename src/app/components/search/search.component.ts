import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { MovieGridComponent } from '../movie-grid/movie-grid.component';
import { MovieService } from '../../service/movie.service';
import { Movie, MovieApiResponse } from '../../model/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MovieGridComponent,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  moviesApiResponse?: MovieApiResponse;
  movies: Movie[] = [];
  searchQuery: string = '';
  imgUrl?: string;
  page: number = 1;
  searchPerformed = false; // Controls whether search results or messages should be shown

  private destroy$ = new Subject<void>();

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.page = params['page'] ? +params['page'] : 1;


      if (this.searchQuery) {
        this.searchMovies(this.searchQuery, this.page);
      }
    });
  }

  onSearch(newQuery: string): void {
    if (newQuery.length < 3) {
      return;
    }


    this.router.navigate([], {
      queryParams: { query: newQuery, page: 1 }
    });
  }

  searchMovies(query: string, page: number) {
    this.searchPerformed = true;
    this.movies = [];
    this.movieService.searchMovies(query, page)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.moviesApiResponse = response;
        this.movies = response.results;
      });
  }

  resetSearch(): void {
    this.searchQuery = '';
    this.movies = [];
    this.searchPerformed = false;
    this.router.navigate(['/search']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
