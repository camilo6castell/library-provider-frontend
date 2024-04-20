import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { UserService } from '../../core/services/user/user.service';
import { IUserModel } from '../../core/models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class indexContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly userService: UserService
  ) {}

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  createUser(newUser: IUserModel): void {
    this.subscriptions.add(
      this.userService
        .registerUser(newUser)
        .pipe(tap(this.appState.user.user.set.bind(this)))
        .subscribe()
    );
  }
  //#endregion
}
