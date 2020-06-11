import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  homeBtn(){
    this.commonService.redirectToPage('');
  }

}
