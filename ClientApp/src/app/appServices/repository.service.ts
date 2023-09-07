import { Injectable } from '@angular/core';
import { Project } from '../models/project-model.model';
import { ProjectItem } from '../projectItem';

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
      link: 'https://github.com/kyleokeeffe/CSharp-Sem2-StudentAccountTracking'
    },
    {
      id: 1,
      name: 'Customer Service Chatbot SRS',
      type: 'SRS',
      language: 'UML',
      description: 'Contributed to development of software requirements documentation for a chatbot browser add-on.',
      photo: '../../assets/images/chatBotDiagram.png',
      link: ''
    },
    {
      id: 2,
      name: 'Quiz Simulation',
      type: 'Standalone',
      language: 'Java',
      description: 'Software for simulating a quiz. Developed using Java with JOptionsPane GUI interface.',
      photo: '../../assets/images/quizSimulation.png',
      link: 'https://github.com/kyleokeeffe/Java-Sem3-JavaProgLab2'
    },
    {
      id: 3,
      name: 'Natural Language Image Processing',
      type: 'Standalone',
      language: 'Python',
      description: 'Python command-line software for conducting image editing operations from natural language requests.',
      photo: '../../assets/images/logo.png',
      link: 'https://github.com/kyleokeeffe/NaturalLanguageImageProc'

    },
    {
      id: 4,
      name: 'Publisher Pattern Implementation',
      type: 'Standalone',
      language: 'CSharp',
      description: 'C# software implementing Publisher pattern in WPF.',
      photo: '../../assets/images/logo.png',
      link: 'https://github.com/kyleokeeffe/Publisher-CSharp'

    },
    {
      id: 5,
      name: 'Personal Portfolio Website',
      type: 'WebApp',
      language: 'EJS',
      description: 'Early iteration of this website implemented using EJS.', 
      photo: '../../assets/images/chatBotDiagram.png',
      link: 'https://github.com/kyleokeeffe/NodeJS-Sem3-ExpressPorfolio'

    },
    {
      id: 6,
      name: 'Regression Test Automation Software',
      type: 'Standalone',
      language: 'Java',
      description: 'Standalone Java software for QA regression testing automation.',
      photo: '../../assets/images/logo.png',
      link: ''
     },
     {
       id: 7,
       name: 'Personal Portfolio Website',
       type: 'WebApp',
       language: 'CSharp',
       description: 'ASP.NET/Angular implementation of this website.',
       photo: '../../assets/images/logo.png',
       link: 'https://github.com/kyleokeeffe/PortfolioWebApp'
     }
  ];
  constructor() { }

   getProjects() {
    return this.projectItemList;
   }
  getProject(id: string):ProjectItem|undefined {


    return this.projectItemList.find(x => x.id == +id);
  }
}
