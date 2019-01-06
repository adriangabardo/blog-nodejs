import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosPostsComponent } from './todos-posts.component';

describe('TodosPostsComponent', () => {
  let component: TodosPostsComponent;
  let fixture: ComponentFixture<TodosPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
