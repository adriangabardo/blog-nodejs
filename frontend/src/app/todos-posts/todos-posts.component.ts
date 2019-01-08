import { Component, OnInit } from '@angular/core';
import { ServicoPostsService } from '../servico-posts.service';

@Component({
  selector: 'app-todos-posts',
  templateUrl: './todos-posts.component.html',
  styleUrls: ['./todos-posts.component.sass']
})
export class TodosPostsComponent implements OnInit {

  posts: any = []

  constructor(private servicoPostsService: ServicoPostsService) { }

  ngOnInit() {
    //Pegar os posts do serviço
    this.servicoPostsService.todosPosts().subscribe(posts => {
      this.posts = posts;
    })

  }

}
