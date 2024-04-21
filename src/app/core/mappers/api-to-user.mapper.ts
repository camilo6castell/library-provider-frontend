import { Injectable } from '@angular/core';
import { ISignupModel } from '../models/signup.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToUserMApper {
  map(payload: any): ISignupModel {
    return {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      password: payload.password,
    };
  }
}
