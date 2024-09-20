import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule,
  ]
  ,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchQuery: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) { }
  

  onSearch(): void {
    if (!(this.searchQuery.length >= 3)) return;
      this.searchMovies(this.searchQuery);
  }

  searchMovies(query: string): void {
    this.movieService.searchMovies(query).subscribe(response => {
      console.log(response.results, 'movies')
      this.movies = response.results;
      
    });
  }

}
