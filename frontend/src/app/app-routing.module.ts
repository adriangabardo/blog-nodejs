import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { TodosPostsComponent } from './todos-posts/todos-posts.component';
import { NovoPostComponent } from './novo-post/novo-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosPostsComponent
  },
  {
    path: ':id',
    component: TodosPostsComponent
  },
  {
    path: 'novo',
    component: NovoPostComponent
  },
  {
    path: 'editar/:id',
    component: PostComponent
  },
  {
    path: 'deletar/:id',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
