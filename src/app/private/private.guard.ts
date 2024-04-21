import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Injectable } from '@angular/core';
import { StorageService } from '../core/services/generals/storage/storage.service';
import { AppState } from '../core/state/app.state';
import { UserService } from '../core/services/user/user.service';

// export const privateGuard: CanActivateFn = (route, state) => {

//   if (appState.user.user) {
//     console.log('in', appState.user.user.snapshot);
//     return true;
//   } else {
//     console.log('out');
//     return false;
//   }
// };

@Injectable({
  providedIn: 'root',
})
export class privateGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.userService.isAuthenticated) {
      console.log(this.userService.isAuthenticated);
      return true; // Permitir la activación de la ruta
    } else {
      // Redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false; // Cancelar la activación de la ruta
    }
  }
}
