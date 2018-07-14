import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {firstName: '', lastName: ''};
  users: User[];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.service.getUsers().subscribe(users => this.users = users);
  }
  addUser() {
    if (!this.user.firstName || !this.user.lastName) {
      alert('Please add a name.');
    } else {
      this.service.addUser(this.user).subscribe(() => {
        this.getUsers();
        this.user.firstName = '';
        this.user.lastName = '';
      });
    }
    
  }
}
