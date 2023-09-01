import { Component, OnInit } from '@angular/core';
import { UserService } from '../appServices/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(public service:UserService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedUser:User) {
    this.service.formData = Object.assign({}, selectedUser);
  }

  onDelete(userID:number) {
    if (confirm("Are yous ure you want to delete this user?")) {
      this.service.deleteUser(userID).subscribe(res => {
        this.service.refreshList();
      },
        err => { console.log(err); })
    }  }
}
