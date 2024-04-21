import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { UserService } from '../../core/services/user/user.service';
import { ISignupModel } from '../../core/models/signup.model';
import { StorageService } from '../../core/services/generals/storage/storage.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly userService: UserService,
    private readonly storageService: StorageService,
    private router: Router
  ) {}

  // region observables
  // user$(): Observable<ISignupModel> {
  //   return this.appState.user.user.$();
  // }
  //#endregion

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  deleteToken(): void {
    this.userService.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  // getUsers(): void {
  //   this.subscriptions.add(
  //     this.userService
  //       .getUser()
  //       .pipe(tap(this.appState.user.user.set.bind(this)))
  //       .subscribe()
  //   );
  // }
  //#endregion
}
