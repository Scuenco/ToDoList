//  import { TaskFormComponent } from './../task-form/task-form.component';
import { Task } from './../../models/Task';
import { TaskService } from './../../services/task.service';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[];

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
   /* addTask() is found under task-form.component */
}
