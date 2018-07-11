import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(users => this.users = users);
  }

}
