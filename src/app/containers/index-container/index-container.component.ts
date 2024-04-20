import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from '../../ui/forms/login-form/login-form.component';
import { SignupFormComponent } from '../../ui/forms/signup-form/signup-form.component';

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
  templateUrl: './index-container.component.html',
})
export class IndexContainerComponent {}
