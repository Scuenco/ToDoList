import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { TaskDetailComponent } from './task-detail.component';
import { TaskService } from '../../services/task.service';
import { HttpClientModule } from '@angular/common/http';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetailComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      providers: [TaskService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
