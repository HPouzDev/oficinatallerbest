import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SCcontrolComponent } from './components/sccontrol/sccontrol.component';
import { QCControlCardComponent } from './components/qccontrol-card/qccontrol-card.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: DashboardComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'sccontrol',
        component: SCcontrolComponent,
      },
      {
        path: 'qccontrol',
        component: QCControlCardComponent,
      },
      { path: '**', redirectTo: 'login' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
