import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISignupModel } from '../models/signup.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private user$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  //   private currentUser$: BehaviorSubject<IUserModel> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      user: this.factory.state(this.user$),
      //   currentUser: this.factory.state(this.currentUser$),
    };
  }
}
