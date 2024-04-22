import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Injectable, inject } from '@angular/core';
import { StorageService } from '../core/services/generals/storage/storage.service';
import { AppState } from '../core/state/app.state';
import { UserService } from '../core/services/user/user.service';
import { Observable } from 'rxjs';

// export const privateGuard = (storageService: StorageService): CanActivateFn => {
//   return (route, state) => {
//     const token = storageService.get('TOKEN'); // Obtener el token del almacenamiento
//     console.log(token);
//     if (token) {
//       return true; // Permitir acceso a la ruta
//     } else {
//       // Redirigir al usuario a la página de inicio de sesión
//       // o a alguna otra página de acceso restringido
//       return false; // Cancelar la activación de la ruta
//     }
//   };
// };

export const privateGuard: CanActivateFn = (
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
  if (tokenValue) {
    return true;
  } else {
    // console.log('denegado');
    return inject(Router).createUrlTree(['/', 'index']);
  }
};

// @Injectable({
//   providedIn: 'root',
// })
// export class privateGuard implements CanActivate {
//   constructor(private userService: UserService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     if (this.userService.isAuthenticated) {
//       console.log(this.userService.isAuthenticated);
//       return true; // Permitir la activación de la ruta
//     } else {
//       // Redirigir al usuario a la página de inicio de sesión
//       this.router.navigate(['/login'], {
//         queryParams: { returnUrl: state.url },
//       });
//       return false; // Cancelar la activación de la ruta
//     }
//   }
// }
