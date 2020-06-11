import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detailsPage = {};
  constructor(private commonService: CommonService) {
    this.detailsPage['appDetails'] = this.commonService.appDetails;
  }

  ngOnInit() {
    if(!this.detailsPage['appDetails'].selectedProject || !this.detailsPage['appDetails'].selectedPlot){
      this.commonService.redirectToPage('');
    }
  }

  paymentPage(){
    this.commonService.redirectToPage('payment');
  }

}
