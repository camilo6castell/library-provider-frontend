import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorsService } from '../errors/errors.service';
import { StorageService } from '../storage/storage.service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly errorService: ErrorsService,
    private readonly storageService: StorageService
  ) {}

  get token(): string {
    return this.storageService.get<string>('TOKEN');
  }

  get header(): HttpHeaders {
    return new HttpHeaders()
      .append('Content-type', 'application/json')
      .append('Authorization', `Bearer ${this.token}`);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => this.errorService.extract(error));
  }

  // METHODS

  get<T>(url: string): Observable<T> {
    return this.httpClient
      .get<T>(url, { headers: this.header })
      .pipe(catchError((error) => this.handleError(error)));
  }

  post<T>(url: string, body: string): Observable<T> {
    return this.httpClient
      .post<T>(url, body, { headers: this.header })
      .pipe(catchError((error) => this.handleError(error)));
  }

  put<T>(url: string, body: string): Observable<T> {
    return this.httpClient
      .put<T>(url, body, { headers: this.header })
      .pipe(catchError((error) => this.handleError(error)));
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient
      .delete<T>(url, { headers: this.header })
      .pipe(catchError((error) => this.handleError(error)));
  }
}
