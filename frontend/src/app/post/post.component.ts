import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ServicoPostsService } from '../servico-posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ServicoPostsService) { }

  post = {}

  funcaoPegarPost(id) {
    this.api.pegarPost(id)
      .subscribe(data => {
        this.post = data;
      });
  }

  ngOnInit() {
    this.funcaoPegarPost(this.route.snapshot.params['id']);
  }

}
