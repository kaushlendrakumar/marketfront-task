import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.scss']
})
export class PlotsComponent implements OnInit {

  plotsPageDetails = {}
  constructor(private commonService: CommonService) { 
    this.plotsPageDetails['appDetails'] = this.commonService.appDetails;
  }

  ngOnInit() {
    if(!this.plotsPageDetails['appDetails'].selectedProject){
      this.commonService.redirectToPage('');
    }
  }

  detailsPage(plot){
    this.plotsPageDetails['appDetails'].selectedPlot = plot;
    this.commonService.redirectToPage('details')
  }

}
