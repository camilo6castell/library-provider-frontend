import { Injectable } from '@angular/core';
import { IUserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToUserMApper {
  map(payload: any): IUserModel {
    return {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      password: payload.password,
    };
  }
}
