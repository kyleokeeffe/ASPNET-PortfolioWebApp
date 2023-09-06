import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../appServices/repository.service';
import { ProjectItem } from '../projectItem';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  thisId!: string;
  thisProject!: ProjectItem;
  constructor(private route: ActivatedRoute, private repo: RepositoryService) {

  }

  ngOnInit(): void {
    var projectId = this.route.snapshot.paramMap.get("id");
    this.thisId = projectId!;

    if (this.thisId) {
      var foundProj=this.repo.getProject(this.thisId);
      if (foundProj) {
        this.thisProject = foundProj;
      } 
    }
  }






}
