import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:3000/users';
  public users: User[];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return (this.http.get<User[]>(this.usersUrl));
  }
  addUser(user: User): Observable<User> {
    console.log('user', user);
    return (this.http.post<User>(this.usersUrl, user, httpOptions));
  }
}
