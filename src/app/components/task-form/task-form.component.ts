import { TaskService } from './../../services/task.service';
import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = {id: 0, title: '', completed: false };
  @Output() newTask: EventEmitter<Task> = new EventEmitter();
  // @Input() currentTask: Task ;
  constructor(private service: TaskService) { }

  ngOnInit() {
  }

  addTask() {
    if (!this.task.title) {
      alert ('Please add a title.');
    } else {
      this.service.addTask(this.task).subscribe((tsk) => {
        // emit the event fr task-form.component
        this.newTask.emit(tsk);
      });
    }
  }
}
