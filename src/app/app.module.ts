import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
// import { FontAwesomeModule } from '@fortawesome/fontawesome-free';
import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TasksComponent,
    NavbarComponent,
    TaskFormComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [UserService, TaskService],
  bootstrap: [AppComponent],
  exports: [TaskFormComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
