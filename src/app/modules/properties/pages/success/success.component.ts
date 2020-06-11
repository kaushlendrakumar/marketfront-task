import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  homeBtn(){
    this.commonService.redirectToPage('');
  }

}
