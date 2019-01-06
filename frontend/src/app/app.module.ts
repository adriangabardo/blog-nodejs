import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { TodosPostsComponent } from './todos-posts/todos-posts.component';
import { PostComponent } from './post/post.component';
import { ServicoPostsService } from './servico-posts.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodosPostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicoPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
