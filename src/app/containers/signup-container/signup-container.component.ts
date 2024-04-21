import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { SignupFormComponent } from '../../ui/forms/signup-form/signup-form.component';
import { ISignupModel } from '../../core/models/signup.model';
import { SignupContainerFacade } from './signup-container.facade';

@Component({
  selector: 'app-index-container',
  standalone: true,
  imports: [MainLayoutComponent, NavbarBlockComponent, SignupFormComponent],
  templateUrl: './signup-container.component.html',
})
export class SignupContainerComponent implements OnInit, OnDestroy {
  // newUser: ISignupModel;

  submitNewUser(newUser: ISignupModel) {
    // this.newUser = newUser;
    this.facade.initSubsciptions();
    this.facade.createUserFacadeService(newUser);
    // console.log(localStorage.getItem('TOKEN'));
  }

  // public user$: Observable<IUserModel>;
  constructor(private readonly facade: SignupContainerFacade) {}
  ngOnInit(): void {
    // this.facade.initSubsciptions();
    // this.facade.createUser(this.newUser);
    // console.log(localStorage.getItem('TOKEN'));
  }
  ngOnDestroy(): void {
    this.facade.destroySubscriptions;
  }
}
