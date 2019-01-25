import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
// task: Task = {id: 0, title: '', completed: false};
task: Task = new Task();
isEdit = false;

  constructor(
    private service: TaskService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getTask(id).subscribe(task => this.task = task);
  }
  editTask(task: Task) {
    this.isEdit = true;
  }
  goBack(): void {
    this.location.back();
  }
  updateTask(task: Task) {
    this.service.updateTask(task).subscribe( t => {
      this.goBack();
      });
  }
  deleteTask(task) {
    if (confirm(`Proceed to delete task: ${task.title}?`)) {
      this.service.deleteTask(task.id).subscribe(() => {
      this.goBack();
      });
    }
  }
}
