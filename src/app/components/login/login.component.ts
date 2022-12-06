import { Component, OnInit } from '@angular/core';
import { Auth, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  auth: Auth;
  constructor(private afApp: FirebaseApp, private formBuilder: FormBuilder) {
    this.auth = getAuth(this.afApp);
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  send(): any {
    console.log(this.formLogin.value);
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ': ' + errorMessage);
      });
  }

  get email() {
    return this.formLogin.get('email') as FormArray;
  }

  get password() {
    return this.formLogin.get('password') as FormArray;
  }
}
