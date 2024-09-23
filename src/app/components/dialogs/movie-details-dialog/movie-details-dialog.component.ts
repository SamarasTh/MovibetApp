import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeepOneDigitPipe } from '../../pipe/keepOneDigit.pipe';
import { MovieService } from '../../../service/movie.service';
import { DialogData } from '../../../model/dialog.model';

@Component({
  selector: 'app-movie-details-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    KeepOneDigitPipe
  ],
  templateUrl: './movie-details-dialog.component.html',
  styleUrl: './movie-details-dialog.component.scss'
})
export class MovieDetailsDialogComponent {


  constructor(
    public dialogRef: MatDialogRef<MovieDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public movie: DialogData,
    private movieService: MovieService,
  ) {

  }

  getImageUrl(posterPath: string) {
    return this.movieService.getImageUrl(posterPath);
  }
}
