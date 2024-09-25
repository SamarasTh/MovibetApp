import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { MovieService } from '../../service/movie.service';
import { DialogService } from '../../service/dialog.service';
import { KeepOneDigitPipe } from '../../pipe/keepOneDigit.pipe';
import { Movie, MovieApiResponse } from '../../model/movie.model';

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [
    MatButton,
    CommonModule,
    MatCardModule,
    KeepOneDigitPipe,
    MatPaginatorModule,
  ]
  ,
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.scss'
})
export class MovieGridComponent implements OnInit, OnDestroy {
  @Input() moviesApiResponse?: MovieApiResponse;
  @Input() searchQuery: string = '';
  movies: Movie[] = [];
  imgUrl?: string;
  currentPage: number = 1;
  totalResults: number = 0;

  private destroy$ = new Subject<void>();

  constructor(
    private movieService: MovieService,
    private dialogService: DialogService) { }

  ngOnInit() {

  }

  ngOnChanges() {

    this.assignResponseData();
    console.log('moviesApiResponse ONCHANGES', this.moviesApiResponse);
  }

  assignResponseData() {
    if (!this.moviesApiResponse) return;
    this.movies = this.moviesApiResponse.results;
    this.totalResults = this.moviesApiResponse.total_results;
  }

  getImageUrl(posterPath: string) {
    return this.movieService.getImageUrl(posterPath);
  }

  toggleMovieDetails(movieId: number): void {
    this.dialogService.openMovieDetailsDialog(movieId);
  }

  fetchNextPage() {
    this.movieService.searchMovies(this.searchQuery, this.currentPage)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        (response: MovieApiResponse) => {
          this.moviesApiResponse = response;
          this.assignResponseData();
        }

      );
  }

  onPageChange(event: PageEvent): void {
    this.fetchNextPage();
    this.currentPage = event.pageIndex + 1;
  }

  toggleCollections(movieId: number): void {
    this.dialogService.openCollectionsDialog(movieId);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

