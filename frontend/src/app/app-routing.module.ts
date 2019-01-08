import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { TodosPostsComponent } from './todos-posts/todos-posts.component';
import { NovoPostComponent } from './novo-post/novo-post.component';
import { EditarPostComponent } from './editar-post/editar-post.component';
import { DeletarPostComponent } from './deletar-post/deletar-post.component';

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
    component: PostComponent
  },
  {
    path: 'novo',
    component: NovoPostComponent
  },
  {
    path: 'editar/:id',
    component: EditarPostComponent
  },
  {
    path: 'deletar/:id',
    component: DeletarPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
