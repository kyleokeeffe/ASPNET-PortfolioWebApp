import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../appServices/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:UserService) { }

  ngOnInit(): void {
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new User();
  }

  onSubmit(form: NgForm) {
    this.insertUser(form);
  }
  insertUser(form: NgForm) {
    this.service.postUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();

      },
      err => { console.log(err); }
    )
  }
  updateUser(form: NgForm) {
    this.service.putUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      })
  }
}
