import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { UserService } from '../../core/services/user/user.service';
import { IUserModel } from '../../core/models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignupContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
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

  createUserFacadeService(newUser: IUserModel): void {
    this.subscriptions.add(
      this.userService
        .registerUserService(newUser)
        .pipe(tap(this.appState.user.user.set.bind(this)))
        .subscribe(
          () => {
            // Registro exitoso, redireccionar a home-component
            alert('Ahora puedes iniciar sesión.');
            this.router.navigate(['/login']);
          },
          (error) => {
            // Error al registrar, mostrar alerta
            console.error('Error al registrar usuario:', error);
            alert('Error al registrar usuario. Inténtalo de nuevo.');
          }
        )
    );
  }
  //#endregion
}
