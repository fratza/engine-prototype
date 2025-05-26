import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { Headline } from "../models/headline.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class EngineApiService {
  private apiUrl = environment.engineApiUrl;
  private apiPath = "/api";

  constructor(private http: HttpClient) {}

  // Get all headlines from the engine-api
  getAllHeadlines(): Observable<Headline[]> {
    return this.http
      .get<Headline[]>(`${this.apiUrl}${this.apiPath}/news`)
      .pipe(catchError(this.handleError));
  }

  // Get a specific headline by ID
  getHeadlineById(id: string): Observable<Headline> {
    return this.http
      .get<Headline>(`${this.apiUrl}${this.apiPath}/news/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Get a random headline
  getRandomHeadline(): Observable<Headline> {
    return this.http
      .get<Headline>(`${this.apiUrl}${this.apiPath}/news/random`)
      .pipe(catchError(this.handleError));
  }

  // Add additional methods as needed for your specific engine-api endpoints

  // Error handling
  private handleError(error: any) {
    console.error("API Error:", error);
    return throwError(
      () => new Error("Something went wrong. Please try again later.")
    );
  }
}
