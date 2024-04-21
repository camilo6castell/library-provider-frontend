import { Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { UserService } from '../../core/services/user/user.service';
import { ILoginModel } from '../../core/models/login.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginContainerFacade {
  private subscriptions: Subscription;

  constructor(
    // private readonly appState: AppState,
    private readonly userService: UserService,
    private router: Router
  ) {}

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loginUserFacadeService(loggedUser: ILoginModel): void {
    this.subscriptions.add(
      this.userService
        .loginUserService(loggedUser)
        // .pipe(
        //   tap(() => {
        //     this.userService.isAuthenticated = true
        //   })
        // )
        .subscribe(
          () => {
            this.userService.isAuthenticated = true;
            this.router.navigate(['/home']);
          },
          (error) => {
            // Error al registrar, mostrar alerta
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión.');
          }
        )
    );
  }
  //#endregion
}
