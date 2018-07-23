import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './../../services/task.service';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFormComponent ],
      imports: [FormsModule, HttpClientModule],
      providers: [TaskService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
