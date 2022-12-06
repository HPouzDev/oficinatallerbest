import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBYSPYR3fO_mdYncu1nOONXWQT-bWGpeMM',
  authDomain: 'oficinaterminalbest.firebaseapp.com',
  projectId: 'oficinaterminalbest',
  storageBucket: 'oficinaterminalbest.appspot.com',
  messagingSenderId: '712849466662',
  appId: '1:712849466662:web:d6c8c850888ba68ec98de7',
};
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({ firebaseConfig })),
    provideAuth(() => getAuth()),
  ],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
