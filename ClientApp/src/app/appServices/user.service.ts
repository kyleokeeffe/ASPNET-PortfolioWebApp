import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: User = new User();
  readonly baseURL = ""//find url to use- perhaps need to set static ip in config
  list: User[]=[];


  constructor(private http: HttpClient) { }

  postUser() {
    return this.http.post(this.baseURL, this.formData);
  }

  putUser() {
    return this.http.put('${this.baseURL} / ${this.formData.UserId}',this.formData)
  }

  deleteUser(id: number) {
    return this.http.delete('${this.baseURL}/${id}');
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as User[]);
  }
}
