import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { TodosPostsComponent } from './todos-posts/todos-posts.component';

const routes: Routes = [
  /*{
    path: '',
    component: TodosPostsComponent
  },
  {
    path: 'editar/:id',
    component: PostComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
