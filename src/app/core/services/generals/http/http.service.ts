import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorsService } from '../errors/errors.service';
import { StorageService } from '../storage/storage.service';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ISignupModel } from '../../../models/signup.model';
import { ILoginModel } from '../../../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly errorService: ErrorsService,
    private readonly storageService: StorageService
  ) {}

  // Token mangament
  get token(): string {
    return this.storageService.get<string>('TOKEN');
  }
  set token(token: string) {
    this.storageService.set('TOKEN', token);
  }
  //

  get header(): HttpHeaders {
    return new HttpHeaders()
      .append('Content-type', 'application/json')
      .append('Authorization', `Bearer ${this.token}`);
  }

  get headerInitial(): HttpHeaders {
    return new HttpHeaders().append('Content-type', 'application/json');
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

  post<T>(url: string, body: T): Observable<T> {
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

  // MINE
  // postServiceCreateNewUser<T>(url: string, body: IUserModel): Observable<T> {
  //   return this.httpClient
  //     .post<T>(url, body, { headers: this.headerRegister })
  //     .pipe(
  //       tap((response: any) => {
  //         if (response.token) {
  //           this.token = response.token;
  //         }
  //       }),
  //       catchError((error) => this.handleError(error))
  //     );
  // }

  //updated
  postServiceCreateNewUser<T>(url: string, body: ISignupModel): Observable<T> {
    return this.httpClient
      .post<T>(url, body, { headers: this.headerInitial })
      .pipe(
        // tap((response: any) => {
        //   if (response.succes) {
        //     this.token = response.token;
        //   }
        // }),
        catchError(this.handleError)
      );
  }
  postServiceLoginUser<T>(url: string, body: ILoginModel): Observable<T> {
    return this.httpClient
      .post<T>(url, body, { headers: this.headerInitial })
      .pipe(
        tap((response: any) => {
          if (response.token) {
            this.token = response.token;
            this.storageService.set('TOKEN', this.token);
            // console.log('httpService: ', this.storageService.get('TOKEN'));
          }
        }),
        catchError(this.handleError)
      );
  }
}
