import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Post {
  titulo: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicoPostsService {

  constructor(private http: HttpClient) { }

  todosPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8000/todos');
  }

  novoPost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:8000/novo/', post);
  }

  pegarPost(id: string): Observable<Post> {
    return this.http.get<Post>('http://localhost:8000/editar/'+id);
  }

  editarPost(post: Post): Observable<void> {
    return this.http.put<void>('http://localhost:8000/editar/:id'+post.id, post);
  }

  deletarPost(id: string) {
    return this.http.delete('http://localhost:8000/apagar/'+id);
  }
}
