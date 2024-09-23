import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { MovieService } from './movie.service';
import { mvbtDesktopDialogConfig } from '../model/dialog.model';

@Injectable({
    providedIn: 'root'
})
export class DialogService {


    constructor(
        public dialog: MatDialog,
        private scrollStrategyOptions: ScrollStrategyOptions,
        private movieService : MovieService
    ) { }


    async openMovieDetailsDialog(movieId: number){
        const {MovieDetailsDialogComponent} = await import(
            '../components/dialogs/movie-details-dialog/movie-details-dialog.component'
        );

        this.movieService.getMovie(movieId).subscribe((data) => {
            console.log(data, 'MOVIE DATA ON CLICK')
            this.dialog.open(MovieDetailsDialogComponent, {
                ...mvbtDesktopDialogConfig,
                scrollStrategy: this.scrollStrategyOptions.noop(),
                data
            })
        })
    }

}
