import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private apiUrl = environment.apiUrl;
    private apiKey = environment.apiKey;

    constructor(private http: HttpClient) { }

    searchMovies(query: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
    }

    getImageUrl(posterPath: string): string {
        return `https://image.tmdb.org/t/p/w500${posterPath}`;
    }

}
