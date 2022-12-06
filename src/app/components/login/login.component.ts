import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      password: ['', Validators.required, Validators.minLength(6)],
    });
  }

  sumbit(): void {
    /*signInWithEmailAndPassword(this, 'proyectoappuerto@gmail.com', 'Best2022')
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ': ' + errorMessage);
      });*/
  }

  send(): any {
    console.log(this.formLogin.value);
  }
}
