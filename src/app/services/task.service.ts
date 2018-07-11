import { Task } from './../models/Task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
  private taskUrl = 'http://localhost:3000/tasks';
  public tasks: Task[];

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return (this.http.get<Task[]>(this.taskUrl));
  }
}
