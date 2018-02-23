import {Component, OnChanges, OnInit} from '@angular/core';
import {MensagensService} from '../../shared/services/mensagens.service';
import {Post} from '../../shared/model/post';
import {Observable} from 'rxjs/Observable';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/services/usuario.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: Post = new Post();
  posts: Observable<Post[]>;
  postsM: Observable<Post[]>;
  postsDoUsuario: Observable<Post[]>;
  usuario: '';
  usuarioLogado: Usuario;

  constructor(private mensagensService: MensagensService, private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    // this.mensagensService.getMensagens().subscribe(
    //   documents => {
    //     console.log(documents);
    //     this.posts = documents.documents;
    //     console.log(this.posts[0].name);
    //     console.log(this.posts[1].fields.mensagem.stringValue);
    //   }, erro => {
    //     console.log('Ocorreu um erro ao tentar se comunicar com o backend: ' + erro);
    //   }
    // );
    this.posts = this.mensagensService.getPosts();
    this.posts.forEach(post => {
      console.log(post);
    });
    this.postsM = this.mensagensService.getPostsComecandoM();
    this.getUsuario('us1');
    console.log('usuario ' + this.usuarioLogado);
  }

  getPostsDoUsuario() {
    this.postsDoUsuario = this.mensagensService.getPostsDoUsuario(this.usuario);
  }

  getUsuario(login: string) {
    this.usuarioService.getUsuario(login).forEach(usuario => this.usuarioLogado = usuario[0]);
    return this.usuarioLogado;
  }

  enviarMensagem() {
    this.mensagensService.enviarMensagem(this.post);
  }

  apagarMensagem(post) {
    this.mensagensService.apagarMensagem(post);
  }
}
