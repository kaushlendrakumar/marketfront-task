import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { ErrorComponent } from './pages/error/error.component';
import { SuccessComponent } from './pages/success/success.component';
import { OtpComponent } from './pages/otp/otp.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { DetailsComponent } from './pages/details/details.component';
import { PlotsComponent } from './pages/plots/plots.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ErrorComponent, SuccessComponent, OtpComponent, PaymentComponent, DetailsComponent, PlotsComponent, ProjectsComponent],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    SharedModule
  ]
})
export class PropertiesModule { }
