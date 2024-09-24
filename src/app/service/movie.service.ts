import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environment/environment';
import { MovieApiResponse } from '../model/movie.model';
import { DialogData } from '../model/dialog.model';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private apiUrl = environment.apiUrl;
    private apiKey = environment.apiKey;

    constructor(private http: HttpClient) { }

    searchMovies(query: string, page: number): Observable<MovieApiResponse> {
        return this.http.get<MovieApiResponse>(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`);
    }

    getImageUrl(posterPath: string): string {
        return `https://image.tmdb.org/t/p/w500${posterPath}`;
    }

    getMovie(movieId: number): Observable<DialogData> {
        return this.http.get<DialogData>(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`);
    }

    generateGuestSession(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/authentication/guest_session/new?api_key=${this.apiKey}`);
    }

    rateMovie(movieId: number, rating: number, guestSessionId: string): Observable<any> {
        const body = {
            value: rating
        };
        return this.http.post<any>(`${this.apiUrl}/movie/${movieId}/rating?api_key=${this.apiKey}&guest_session_id=${guestSessionId}`, body);
    }




}
