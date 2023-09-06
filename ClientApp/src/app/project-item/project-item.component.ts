import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectItem } from '../projectItem';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  @Input() projectItem!: ProjectItem;


  goToProjectDetail(projectItem: ProjectItem) {
    const projectId = projectItem ? projectItem.id : null;
    this.router.navigate(['/project-details/'+projectItem.id]);
  }
}
