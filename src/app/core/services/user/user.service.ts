import { Injectable } from '@angular/core';
import { HttpService } from '../generals/http/http.service';
import { ApiToUserMApper } from '../../mappers/api-to-user.mapper';
import { Observable } from 'rxjs';
import { IuserModel } from '../../models/user.model';
import { URL_RESOURCES } from '../../resources/url.resources';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private readonly httpService: HttpService,
    private apiToUserMapper: ApiToUserMApper
  ) {}
  getUser(): Observable<IuserModel> {
    const url = URL_RESOURCES.user;
    return this.httpService
      .get<IuserModel>(url)
      .pipe((result) => this.apiToUserMapper.map(result));
  }
}
