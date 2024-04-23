import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupContainerComponent } from '../../containers/signup-container/signup-container.component';
import { LoginContainerComponent } from '../../containers/login-container/login-container.component';
import { authenticationGuardGuard } from './authentication-guard.guard';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authenticationGuardGuard],
    children: [
      {
        path: 'login',
        component: LoginContainerComponent,
      },
      {
        path: 'signup',
        component: SignupContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
