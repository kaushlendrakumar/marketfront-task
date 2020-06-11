import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  
  paymentDetails = {}

  constructor(private commonService: CommonService) { 
    this.paymentDetails['appDetails'] = this.commonService.appDetails;
  }

  ngOnInit() {
    if(!this.paymentDetails['appDetails'].selectedProject || !this.paymentDetails['appDetails'].selectedPlot){
      this.commonService.redirectToPage('');
    }
    
  }

  otpPage(){
    this.commonService.redirectToPage('otp');
  }

}
