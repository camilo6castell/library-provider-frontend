import { CanActivateFn } from '@angular/router';

export const privateGuard: CanActivateFn = (route, state) => {
  return true;
};
