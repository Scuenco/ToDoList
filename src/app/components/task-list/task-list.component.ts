import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
tasks: Task[];
displayTaskForm = false;

  constructor(private taskService: TaskService ) { }

  ngOnInit() {
  this.getTasks();
  }
  getTasks() {
    this.taskService.getTasks().subscribe( tasks => this.tasks = tasks);
  }
  displayForm() {
    this.displayTaskForm = true;
  }
}
