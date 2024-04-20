import { Injectable } from '@angular/core';
import { UserState } from './user.state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(private readonly userState: UserState) {}

  get users() {
    return this.userState.store();
  }
}
