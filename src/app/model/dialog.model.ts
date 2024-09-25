import { MatDialogConfig } from "@angular/material/dialog";


export const mvbtDesktopDialogConfig = {
    panelClass: ['mvbt-dialog'],
    maxWidth: '100%',
} as MatDialogConfig;

export const mvbtMobileDialogConfig = {
    panelClass: ['mvbt-dialog', 'animate__animated', ' animate_slideInUp', 'animate_faster'],
    maxWidth: '100%',
} as MatDialogConfig;


export interface DialogData {
    title: string,
    overview: string,
    poster_path: string,
    budget: number,
    release_date: string,
    revenue: number,
    vote_average: number,
    vote_count: number,
    spoken_languages: Language[]
    id?: number; // added as optional to have access on it when posting a rating
}

export interface Language {
    english_name: string;
    iso_639_1: string;
    name: string;
}