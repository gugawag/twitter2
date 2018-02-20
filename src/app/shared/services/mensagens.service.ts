import {Injectable} from '@angular/core';

@Injectable()
export class MensagensService {

  mensagens = ['Mensagem 1', 'Mensagem 2', 'Mensagem 3'];

  constructor() {
  }

  getMensagens() {
    return this.mensagens;
  }

  enviarMensagem(mensagem: string) {
    this.mensagens.push(mensagem);
  }

}
