import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

//COMPONENTS
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//FIREBASE
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AppRoutingModule } from './app.routing.module';
import { SCcontrolComponent } from './components/sccontrol/sccontrol.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';

import { DecimalPipe, NgFor } from '@angular/common';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    TabbarComponent,
    DecimalPipe,
    NgFor,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SCcontrolComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
