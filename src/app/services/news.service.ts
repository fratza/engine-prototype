import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Headline } from '../models/headline.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiBase = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  /**
   * Fetches all news headlines from the configured API endpoint
   * @returns Observable of an array of news headline objects
   */
  getNewsHeadlines(): Observable<Headline[]> {
    return this.http.get<Headline[]>(this.apiBase)
      .pipe(
        catchError(error => {
          console.error('Error fetching news headlines:', error);
          return throwError(() => error);
        })
      );
  }

  /**
   * Fetches a random news headline from the API
   * @returns Observable of a single news headline object
   */
  getRandomHeadline(): Observable<Headline> {
    console.log('Fetching random headline from:', `${this.apiBase}/random`);
    return this.http.get<Headline>(`${this.apiBase}/random`)
      .pipe(
        catchError(error => {
          console.error('Error fetching random headline:', error);
          console.error('API base URL:', this.apiBase);
          console.error('Full error details:', JSON.stringify(error));
          return throwError(() => error);
        })
      );
  }

  /**
   * Fetches a specific news headline by ID
   * @param id - The ID of the headline to fetch
   * @returns Observable of a single news headline object
   */
  getHeadlineById(id: string): Observable<Headline> {
    return this.http.get<Headline>(`${this.apiBase}/${id}`)
      .pipe(
        catchError(error => {
          console.error(`Error fetching headline with ID ${id}:`, error);
          return throwError(() => error);
        })
      );
  }
}
