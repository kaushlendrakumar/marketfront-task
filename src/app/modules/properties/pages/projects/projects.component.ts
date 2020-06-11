import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsDetails = {}
  constructor(private commonService: CommonService) {
    this.projectsDetails['appDetails'] = this.commonService.appDetails;
  }

  ngOnInit() {
    this.projectsDetails['appDetails'] = this.commonService.appDetails;
  }

  plotsPage(project){
    this.projectsDetails['appDetails'].selectedProject = project;
    this.commonService.redirectToPage('plots');
  }

}
