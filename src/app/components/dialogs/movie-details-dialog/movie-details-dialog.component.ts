import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { KeepOneDigitPipe } from '../../../pipe/keepOneDigit.pipe';
import { MovieService } from '../../../service/movie.service';
import { DialogData } from '../../../model/dialog.model';

@Component({
  selector: 'app-movie-details-dialog',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatDialogModule,
    KeepOneDigitPipe,
  ],
  templateUrl: './movie-details-dialog.component.html',
  styleUrl: './movie-details-dialog.component.scss'
})
export class MovieDetailsDialogComponent implements OnInit {
  guestSessionId: string | null = null;
  rating: number = 0;

  private destroy$ = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<MovieDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public movie: DialogData,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.initGuestSession();

  }

  getImageUrl(posterPath: string) {
    return this.movieService.getImageUrl(posterPath);
  }

  onPrimaryClick() {
    this.dialogRef.close();
  }

  initGuestSession() {
    this.movieService.generateGuestSession().subscribe(response => {
      this.guestSessionId = response.guest_session_id;
    });
  }

  postRating() {
    if (this.guestSessionId && this.rating > 0 && this.movie.id) {
      this.movieService.rateMovie(this.movie.id, this.rating, this.guestSessionId)
        .pipe(takeUntil(this.destroy$))
        .subscribe(response => {
          alert('Rating submitted successfully!');
        });
    } else {
      alert('Movie ID or guest session is missing');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
