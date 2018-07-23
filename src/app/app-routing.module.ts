import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks/:id',
    component: TaskDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
