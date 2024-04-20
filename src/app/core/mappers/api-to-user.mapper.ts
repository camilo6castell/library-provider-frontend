import { Injectable } from '@angular/core';
import { IuserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToUserMApper {
  map(payload: any): IuserModel {
    return {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      password: payload.password,
    };
  }
}
