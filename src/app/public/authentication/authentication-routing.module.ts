import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupContainerComponent } from '../../containers/signup-container/signup-container.component';
import { LoginContainerComponent } from '../../containers/login-container/login-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginContainerComponent,
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
    path: 'register',
    component: SignupContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
