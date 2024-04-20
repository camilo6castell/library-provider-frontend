import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from '../../ui/forms/login-form/login-form.component';
import { SignupFormComponent } from '../../ui/forms/signup-form/signup-form.component';
import { IUserModel } from '../../core/models/user.model';
import { Observable } from 'rxjs';
import { indexContainerFacade } from './signup-container.facade';

@Component({
  selector: 'app-index-container',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NavbarBlockComponent,
    RouterOutlet,
    LoginFormComponent,
    SignupFormComponent,
  ],
  templateUrl: './signup-container.component.html',
})
export class signupComponent {
  newUser: IUserModel;

  submitNewUser(newUser: IUserModel) {
    this.newUser = newUser;
    console.log(newUser);
  }

  public user$: Observable<IUserModel>;
  constructor(private readonly facade: indexContainerFacade) {}
}
