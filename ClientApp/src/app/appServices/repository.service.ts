import { Injectable } from '@angular/core';
import { Project } from '../models/project-model.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

   projectItemList: Project[] = [
    {
      id: 0,
      name: 'Student Records Application',
      type: 'Standalone',
      language: 'CSharp',
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
      type: 'Standalone',
      language: 'Java',
      description: 'Software for simulating a quiz. Developed using Java with JOptionsPane GUI interface.',
      photo: '../../assets/images/quizSimulation.png',
      link: 'http://www.google.ca'
    },
    {
      id: 3,
      name: 'Natural Language Image Processing',
      type: 'Standalone',
      language: 'Python',
      description: 'Python command-line software for conducting image editing operations from natural language requests.',
      photo: '../../assets/images/logo.png',
      link: 'http://www.google.ca'

    },
    {
      id: 4,
      name: 'Publisher Pattern Implmentation',
      type: 'Standalone',
      language: 'CSharp',
      description: 'C# software implementing Publisher pattern in WPF.',
      photo: '../../assets/images/logo.png',
      link: 'http://www.google.ca'

    },
    {
      id: 5,
      name: 'Personal Portfolio Website',
      type: 'WebApp',
      language: 'Angular',
      description: 'Portfolio website implemented using multiple frameworks. Currently completed frameworks: EJS, Angular/ASP.NET.',
      photo: '../../assets/images/chatBotDiagram.png',
      link: 'http://www.google.ca'

    },
    {
      id: 6,
      name: 'Regression Test Automation Software',
      type: 'Standalone',
      language: 'Java',
      description: 'Standalone Java software for QA regression testing automation.',
      photo: '../../assets/images/logo.png',
      link: 'http://www.google.ca'
    }
  ];
  constructor() { }

   getProjects() {
    return this.projectItemList;
  }
}
