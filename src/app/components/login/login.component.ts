import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  sumbit(): void {
    signInWithEmailAndPassword(this, 'proyectoappuerto@gmail.com', 'Best2022')
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ': ' + errorMessage);
      });
  }
}
