import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexContainerComponent } from '../../containers/index-container/index-container.component';
import { LoginFormComponent } from '../../ui/forms/login-form/login-form.component';
import { SignupFormComponent } from '../../ui/forms/signup-form/signup-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    component: IndexContainerComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent,
      },
      {
        path: 'signup',
        component: SignupFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
