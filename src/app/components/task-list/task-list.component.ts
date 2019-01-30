import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
tasks: Task[];
displayTaskForm = false;
length = 0;
pageSize = 2 || this.length;
pageSizeOptions: number[] = [5,25,50,100];

  constructor(private taskService: TaskService ) { }

  ngOnInit() {
  this.getTasks();
  }
  getTasks() {
    this.taskService.getTasks().subscribe( tasks => {
      this.tasks = tasks;
      this.length = tasks.length;
    });
  }
  displayForm() {
    this.displayTaskForm = true;
  }
  onChangedPage(pageData: PageEvent) {
    console.log(pageData);
  }
}
