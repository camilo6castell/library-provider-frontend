import { Injectable } from '@angular/core';
import { HttpService } from '../generals/http/http.service';
import { ApiToUserMApper } from '../../mappers/api-to-user.mapper';
import { Observable } from 'rxjs';
import { IUserModel } from '../../models/user.model';
import { URL_RESOURCES } from '../../resources/url.resources';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private readonly httpService: HttpService,
    private apiToUserMapper: ApiToUserMApper
  ) {}
  // getUser(): Observable<IUserModel> {
  //   const url = URL_RESOURCES.user;
  //   return this.httpService
  //     .get<IUserModel>(url)
  //     .pipe(map((result) => this.apiToUserMapper.map(result)));
  // }
  registerUser(body: IUserModel): Observable<any> {
    const url = URL_RESOURCES.userSignUp;
    return this.httpService.postCreateNewUser(url, body);
  }
}
