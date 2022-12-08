import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { User } from '../../models/user';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  user: User;
  showAlert: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseAuth: FirebaseAuthService
  ) {}

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  send(): any {
    console.log('Email: ' + this.email.value + ', Pass:' + this.password.value);
    this.firebaseAuth
      .login(this.email.value, this.password.value)
      .subscribe((user) => {
        this.user = user;
        this.showAlert = !user.userSession.isValidUser;
      });
  }

  get email() {
    return this.formLogin.get('email') as FormArray;
  }

  get password() {
    return this.formLogin.get('password') as FormArray;
  }
}
