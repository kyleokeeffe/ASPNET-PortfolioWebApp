import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from '../projectItem';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() projectItem!: ProjectItem;
}
