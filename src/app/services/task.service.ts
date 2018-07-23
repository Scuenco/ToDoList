import { Task } from './../models/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TaskService {
  private taskUrl = 'http://localhost:3000/tasks';
  public tasks: Task[];

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return (this.http.get<Task[]>(this.taskUrl));
  }
  getTask(id: number): Observable<Task> {
    const url = `${this.taskUrl}/${id}`;
    return (this.http.get<Task>(url));
  }
  addTask(task: Task): Observable<Task> {
    return (this.http.post<Task>(this.taskUrl, task, httpOptions));
  }
  updateTask(task: Task): Observable<Task> {
    const url = `${this.taskUrl}/${task.id}`;
    return (this.http.put<Task>(url, task, httpOptions));
  }
  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.taskUrl}/${id}`,);
  }
}
// From terminal: json-server --watch mockdb.json
