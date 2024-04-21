import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../../core/services/user/user.service';
import { Injectable, inject } from '@angular/core';
import { StorageService } from '../../core/services/generals/storage/storage.service';

export const authenticationGuardGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree => {
) => {
  // const currentUser = inject(Router).createUrlTree(['/', 'index']);
  // Verificar si el valor del servicio estático coincide con 'TOKEN'
  const tokenValue = StorageService.getToken('TOKEN'); // Suponiendo que 'getToken' es un método para obtener el valor
  console.log(tokenValue);
  if (!tokenValue) {
    console.log(tokenValue);
    return true;
  } else {
    console.log('denegado, index a home');
    return inject(Router).createUrlTree(['/', 'home']);
  }
};

// @Injectable({
//   providedIn: 'root',
// })
// export class authenticationGuardGuard implements CanActivate {
//   constructor(
//     private userService: UserService,
//     private router: Router,
//     private storageService: StorageService
//   ) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     if (!this.storageService.get('TOKEN')) {
//       console.log(this.storageService.get('TOKEN'));
//       return true;
//     } else {
//       console.log(this.storageService.get('TOKEN'));
//       // Redirigir al usuario a la página de inicio de sesión
//       this.router.navigate(['/home'], {
//         queryParams: { returnUrl: state.url },
//       });
//       return false;
//     }
//   }
// }
