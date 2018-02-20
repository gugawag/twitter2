import {Component, OnInit} from '@angular/core';
import {MensagensService} from '../../shared/services/mensagens.service';
import {Mensagem} from '../../shared/model/mensagem';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensagens: string[];
  mensagem: Mensagem = new Mensagem();

  constructor(private mensagensService: MensagensService) {
  }

  ngOnInit() {
    this.mensagens = this.mensagensService.getMensagens();
  }

  enviarMensagem() {
    this.mensagensService.enviarMensagem(this.mensagem.texto);
  }

}
