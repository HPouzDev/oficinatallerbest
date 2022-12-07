import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
//FIREBASE
import { Auth, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  send(): any {
    console.log(this.formLogin.value);
    signInWithEmailAndPassword(getAuth, this.email, this.password)
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
