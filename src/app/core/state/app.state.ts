import { Injectable } from '@angular/core';
import { UserState } from './user.state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(private readonly userState: UserState) {}

  get user() {
    return this.userState.store();
  }
}
