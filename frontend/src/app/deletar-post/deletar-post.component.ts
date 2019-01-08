import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ServicoPostsService } from '../servico-posts.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-deletar-post',
  templateUrl: './deletar-post.component.html',
  styleUrls: ['./deletar-post.component.sass']
})
export class DeletarPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ServicoPostsService, private http: HttpClient) { }

  post = {}
  apiUrl = 'localhost:8000/apagar/'
  idDeletar = this.route.snapshot.params['id']

  funcaoConfirmaDeletar() {
    return this.api.deletarPost(this.idDeletar).subscribe(post => {
    })
  }

  ngOnInit() {
    this.api.pegarPost(this.idDeletar)
      .subscribe(data => {
        console.log(data);
        this.post = data;
      });
  }

}
