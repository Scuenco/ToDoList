import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:3000/users';
  public users: User[];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return (this.http.get<User[]>(this.usersUrl));
  }
}
