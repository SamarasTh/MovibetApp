import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { MovieService } from './movie.service';

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
                scrollStrategy: this.scrollStrategyOptions.noop(),
                data
            })
        })
    }

    async openCollectionsDialog(movieId : number){
        const { CollectionsDialogComponent } = await import(
            '../components/dialogs/collections-dialog/collections-dialog.component'
        );

        this.movieService.getMovie(movieId).subscribe((data) => {
            console.log(data, 'MOVIE DATA ON CLICK')
            this.dialog.open(CollectionsDialogComponent, {
                scrollStrategy: this.scrollStrategyOptions.noop(),
                data
            })
        })
    }

}
