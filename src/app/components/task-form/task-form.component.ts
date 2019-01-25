import { TaskService } from './../../services/task.service';
import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  @Output() newTask: EventEmitter<Task> = new EventEmitter();
  // @Input() currentTask: Task ;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  addTask() {
    if (!this.task.title) {
      alert ('Please add a title.');
    } else {
      this.taskService.addTask(this.task).subscribe((tsk) => {
        // emit the event to task-list
        this.newTask.emit(tsk);
        this.task = new Task();
      });
    }
  }
}
