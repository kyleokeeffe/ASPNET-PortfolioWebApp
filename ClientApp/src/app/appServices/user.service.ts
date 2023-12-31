import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor( private http:HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }
}
