import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
  ]
  ,
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.scss'
})
export class MovieGridComponent implements OnInit {
  @Input() movies: any[] = [];
  imgUrl?: string;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  getImageUrl(posterPath: string) {
    return this.movieService.getImageUrl(posterPath);
  }

  toggleMovieDetails(movieId: number): void {
  }
}

