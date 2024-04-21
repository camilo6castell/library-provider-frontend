import { Component, EventEmitter, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';
import { ILoginModel } from '../../../core/models/login.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  @Output() newLoginEvent = new EventEmitter<ILoginModel>();

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm(); // Call createForm() in the constructor
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      // this.newUser = this.signupForm.value;
      this.newLoginEvent.emit(this.loginForm.value);
      // console.log('Form submitted!', this.userModel);
      // Send data to backend here
    } else {
      console.error('Invalid form!');
    }
  }
}
