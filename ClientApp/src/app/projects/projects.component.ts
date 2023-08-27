import { Component, OnInit } from '@angular/core';
import { ProjectItem } from '../projectItem';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  projectItemList: ProjectItem[] = [
    {
      id: 0,
      name: 'Student Records Application',
      type: 'statndalone',
      language: 'csharp',
      description: 'Software to record, access and manage the academic records for multiple users. Developed using C# WPF GUI interface.',
      photo: '../../assets/images/studentTracking.PNG',
      link: 'http://www.google.ca'
    },
    {
      id: 1,
      name: 'Customer Service Chatbot SRS',
      type: 'SRS',
      language: 'UML',
      description: 'Contributed to development of software requirements documentation for a chatbot browser add-on.',
      photo: '../../assets/images/chatBotDiagram.png',
      link: 'http://www.google.ca'
    },
    {
      id: 2,
      name: 'Quiz Simulation',
      type: 'standalone',
      language: 'Java',
      description: 'Software for simulating a quiz. Developed using Java with JOptionsPane GUI interface.',
      photo: '../../assets/images/quizSimulation.png',
      link: 'http://www.google.ca'
    },
    {
      id: 3,
      name: 'Natural Language Image Processing',
      type: 'standalone',
      language: 'python',
      description: 'Python command-line software for conducting image editing operations from natural language requests.',
      photo: '../../assets/images/logo.png',
      link: 'http://www.google.ca'

    },
    {
      id: 4,
      name: 'Publisher Pattern Implmentation',
      type: 'standalone',
      language: 'csharp',
      description: 'C# software implementing Publisher pattern in WPF.',
      photo: '../../assets/images/logo.png',
      link: 'http://www.google.ca'

    },
    {
      id: 5,
      name: 'Personal Portfolio Website',
      type: 'webapp',
      language: 'angular',
      description: 'Portfolio website implemented using multiple frameworks. Currently completed frameworks: EJS, Angular/ASP.NET.',
      photo: '../../assets/images/chatBotDiagram.png',
      link: 'http://www.google.ca'

    },
    {
      id: 6,
      name: 'Regression Test Automation Software',
      type: 'standalone',
      language: 'java',
      description: 'Standalone Java software for QA regression testing automation.',
      photo: '../../assets/images/logo.png',
      link: 'http://www.google.ca'

    }

  ]


  selectedProjType = "all";
  selectedLang = "all";

  public projectItemListFilt: ProjectItem[] = this.projectItemList;


  constructor() { }

  ngOnInit(): void {
  }

  public valueSelected() {



    if (this.selectedLang == "all" && this.selectedProjType == "all") {
      this.projectItemListFilt = this.projectItemList;
    }
    else if (this.selectedLang == "all" && this.selectedProjType != "all") {
      this.projectItemListFilt = this.projectItemList.filter(item => (item.type == this.selectedProjType));

    }
    else if (this.selectedLang != "all" && this.selectedProjType == "all") {
      this.projectItemListFilt = this.projectItemList.filter(item => (item.language == this.selectedLang));

    } else {
      this.projectItemListFilt = this.projectItemList.filter(item => item.language == this.selectedLang).filter(item => item.type == this.selectedProjType);

    }

  }

}
