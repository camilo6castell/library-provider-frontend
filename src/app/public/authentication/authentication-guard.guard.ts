import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../../core/services/user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class authenticationGuardGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.userService.isAuthenticated) {
      console.log(this.userService.isAuthenticated);
      return true;
    } else {
      console.log(this.userService.isAuthenticated);
      // Redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/home'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
