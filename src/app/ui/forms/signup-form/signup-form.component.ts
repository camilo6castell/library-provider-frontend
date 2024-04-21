import { Component, EventEmitter, Output } from '@angular/core';
import { ISignupModel } from '../../../core/models/signup.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  // @Output() userModel: IUserModel = {} as IUserModel;
  @Output() newUserEvent = new EventEmitter<ISignupModel>();
  // auxNewUser: ISignupModel = {} as ISignupModel;

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm(); // Call createForm() in the constructor
  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.signupForm.valid) {
      // this.newUser = this.signupForm.value;
      this.newUserEvent.emit(this.signupForm.value);
      // console.log('Form submitted!', this.userModel);
      // Send data to backend here
    } else {
      alert('formulario inválido!');
    }
  }
}
