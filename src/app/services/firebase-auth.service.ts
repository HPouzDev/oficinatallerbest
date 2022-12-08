import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class FirebaseAuthService {
  constructor(private auth: Auth) {}

  user: any;
  isValidUser: boolean;

  getFirebaseUser(): any {
    return this.user;
  }

  logout() {
    signOut(this.auth);
  }

  resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        this.user = userCredential.user;
        this.isValidUser = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isValidUser = false;
      });
  }
}
