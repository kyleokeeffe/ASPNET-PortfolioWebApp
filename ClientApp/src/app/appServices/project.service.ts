import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Project } from '../models/project-model.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = 'api/projects'

  constructor(private http: HttpClient) { }
  getProjects(): Observable<Project[]> {
    //return this.http.get<Project[]>(this.projectsUrl)
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
        catchError(this.handleError<Project[]>('getProjects', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
