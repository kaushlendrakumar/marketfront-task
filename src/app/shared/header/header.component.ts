import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pageDetails = {}

  constructor(private commonService: CommonService) {
    this.pageDetails['appDetails'] = this.commonService.appDetails;
  }

  ngOnInit() {
  }

}
