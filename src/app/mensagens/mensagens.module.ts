import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import {MensagensService} from '../shared/services/mensagens.service';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [PostsComponent],
  providers: [MensagensService]
})
export class MensagensModule { }
