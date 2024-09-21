import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environment/environment';
import { MovieApiResponse } from '../model/movie.model';

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

}
