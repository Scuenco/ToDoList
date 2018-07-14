import { Task } from './../../models/Task';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[];
currentTask: Task = {
  id: 0,
  title: '',
  details: ''
};

  constructor(private service: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }
  addToTaskList(task: Task) {
    this.tasks.unshift(task);
  }
  getTasks() {
    this.service.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  editTask(task) {
    this.currentTask = task;
    console.log(this.currentTask);
  }
  deleteTask(task) {
    this.service.deleteTask(task.id).subscribe(() =>
    this.getTasks()); // to refresh tasklist
  }
  /* addTask() is found under task-form.component */
}
