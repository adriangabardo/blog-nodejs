import { Component, OnInit } from '@angular/core';
import { ServicoPostsService } from '../servico-posts.service';


@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.sass']
})
export class NovoPostComponent implements OnInit {

  constructor(private api: ServicoPostsService) {  }

  post = []

  funcaoSalvarPost(post) {
    this.api.novoPost(post)
      .subscribe(data => {
        console.log(data);
      });
      //console.log(post)
  }

  ngOnInit() {
  }

}
