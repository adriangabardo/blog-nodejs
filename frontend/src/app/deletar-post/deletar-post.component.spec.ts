import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarPostComponent } from './deletar-post.component';

describe('DeletarPostComponent', () => {
  let component: DeletarPostComponent;
  let fixture: ComponentFixture<DeletarPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
