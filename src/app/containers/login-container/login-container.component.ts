import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { LoginFormComponent } from '../../ui/forms/login-form/login-form.component';
import { ILoginModel } from '../../core/models/login.model';
import { LoginContainerFacade } from './login-container.facade';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [
    RouterOutlet,
    MainLayoutComponent,
    NavbarBlockComponent,
    LoginFormComponent,
  ],
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent {
  // isLogin: ILoginModel;

  submitNewUser(isLogin: ILoginModel) {
    // this.isLogin = isLogin;
    this.facade.initSubsciptions();
    this.facade.loginUserFacadeService(isLogin);
    // console.log(localStorage.getItem('TOKEN'));
  }

  // public user$: Observable<IUserModel>;
  constructor(private readonly facade: LoginContainerFacade) {}
  ngOnInit(): void {
    // this.facade.initSubsciptions();
    // this.facade.createUser(this.newUser);
    // console.log(localStorage.getItem('TOKEN'));
  }
  ngOnDestroy(): void {
    this.facade.destroySubscriptions;
  }
}
