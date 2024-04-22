import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISignupModel } from '../models/signup.model';
import { StateFactory } from './factory.state';
import { ITextModel } from '../models/text.model';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private user$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private stockTexts$: BehaviorSubject<ITextModel[]> = new BehaviorSubject(
    null
  );

  constructor(private readonly factory: StateFactory) {}

  store() {
    return {
      user: this.factory.state(this.user$),
      stockTexts: this.factory.state(this.stockTexts$),
    };
  }
}
