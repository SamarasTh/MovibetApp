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


}
