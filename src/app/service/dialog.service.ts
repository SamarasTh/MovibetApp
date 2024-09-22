import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Injectable({
    providedIn: 'root'
})
export class DialogService {


    constructor(
        public dialog: MatDialog,
        private scrollStrategyOptions: ScrollStrategyOptions
    ) { }




}
