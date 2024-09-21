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
    MovieGridComponent
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


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
