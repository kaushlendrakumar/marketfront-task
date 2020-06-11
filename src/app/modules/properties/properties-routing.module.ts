import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './pages/error/error.component';
import { SuccessComponent } from './pages/success/success.component';
import { OtpComponent } from './pages/otp/otp.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { DetailsComponent } from './pages/details/details.component';
import { PlotsComponent } from './pages/plots/plots.component';
import { ProjectsComponent } from './pages/projects/projects.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'plots',
    component: PlotsComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'otp',
    component: OtpComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
