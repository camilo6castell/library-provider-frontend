import { Component, EventEmitter, Output } from '@angular/core';
import { IUserModel } from '../../../core/models/user.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiToUserMApper } from '../../../core/mappers/api-to-user.mapper';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  // @Output() userModel: IUserModel = {} as IUserModel;
  @Output() newUserEvent = new EventEmitter<IUserModel>();
  auxNewUser: IUserModel = {} as IUserModel;

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
      this.auxNewUser = this.signupForm.value;
      // this.newUser = this.signupForm.value;
      this.newUserEvent.emit(this.auxNewUser);
      // console.log('Form submitted!', this.userModel);
      // Send data to backend here
    } else {
      console.error('Invalid form!');
    }
  }
}
