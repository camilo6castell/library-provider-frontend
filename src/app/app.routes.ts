import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'index',
    loadChildren: () =>
      import('./public/public.module').then((module) => module.PublicModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./private/private.module').then((module) => module.PrivateModule),
  },
  {
    path: '**',
    redirectTo: 'index',
  },
];
