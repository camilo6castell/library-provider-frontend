import { Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { UserService } from '../../core/services/user/user.service';
import { ILoginModel } from '../../core/models/login.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/generals/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginContainerFacade {
  private subscriptions: Subscription;

  constructor(
    // private readonly appState: AppState,
    private readonly userService: UserService,
    private router: Router,
    private storageService: StorageService
  ) {}

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  async loginUserFacadeService(loggedUser: ILoginModel): Promise<void> {
    this.subscriptions.add(
      this.userService
        .loginUserService(loggedUser)
        .pipe(
          tap((data: any) => {
            console.log('LOGIN FACADE SERIVE', data);
            this.storageService.set('TOKEN', data.token);
            // this.userService.isAuthenticated = true;
            this.router.navigate(['/home']);
          })
        )
        .subscribe()
    );
  }

  //#endregion
}
