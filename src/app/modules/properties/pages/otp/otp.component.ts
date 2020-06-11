import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  paymentDetails = {};
  otp: any = '';
  constructor(private commonService: CommonService) {
    this.paymentDetails['appDetails'] = this.commonService.appDetails;
  }

  ngOnInit() {
    if(!this.paymentDetails['appDetails'].selectedProject || !this.paymentDetails['appDetails'].selectedPlot){
      this.commonService.redirectToPage('');
    }
  }

  successPage(){
    this.commonService.redirectToPage('success');
  }

}
