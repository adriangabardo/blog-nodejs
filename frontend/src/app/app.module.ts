import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { TodosPostsComponent } from './todos-posts/todos-posts.component';
import { PostComponent } from './post/post.component';
import { ServicoPostsService } from './servico-posts.service';
import { NovoPostComponent } from './novo-post/novo-post.component';
import { EditarPostComponent } from './editar-post/editar-post.component';
import { DeletarPostComponent } from './deletar-post/deletar-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodosPostsComponent,
    PostComponent,
    NovoPostComponent,
    EditarPostComponent,
    DeletarPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicoPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
