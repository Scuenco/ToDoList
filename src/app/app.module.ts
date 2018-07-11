import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
