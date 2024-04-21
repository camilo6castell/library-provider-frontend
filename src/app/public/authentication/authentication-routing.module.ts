import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupContainerComponent } from '../../containers/signup-container/signup-container.component';
import { LoginContainerComponent } from '../../containers/login-container/login-container.component';
import { authenticationGuardGuard } from './authentication-guard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginContainerComponent,
    canActivate: [authenticationGuardGuard],

    // children: [
    //   {
    //     path: 'login',
    //     component: LoginFormComponent,
    //   },
    //   {
    //     path: 'signup',
    //     component: SignupFormComponent,
    //   },
    // ],
  },
  {
    path: 'signup',
    component: SignupContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
