import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import {MensagensService} from '../shared/services/mensagens.service';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UsuarioService} from '../shared/services/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [PostsComponent],
  providers: [MensagensService, UsuarioService]
})
export class MensagensModule { }
