import {Injectable} from '@angular/core';
import {Post} from '../model/post';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Usuario} from '../model/usuario';

@Injectable()
export class UsuarioService {

  // apiPosts = 'https://firestore.googleapis.com/v1beta1/projects/twitter2-ifpb/databases/(default)/documents/usuarios';
  usuariosCol: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore) {
    this.usuariosCol = afs.collection('usuarios');
  }

  //
  // getPosts(): Observable<Post[]> {
  //   const postsTeste = this.afs.firestore.collection('posts').get().then(
  //     qs => {
  //       qs.docs.forEach(docRef => {
  //         this.postsCol.doc(docRef.id).update(
  //           {id: docRef.id}
  //         );
  //       });
  //     }
  //   );
  //   return this.postsCol.valueChanges();
  // }

  getUsuario(login: string): Observable<Usuario[]> {
    const usuario: AngularFirestoreCollection<Usuario> = this.afs.collection('usuarios', ref =>
      ref.where('login', '==', login));
    return usuario.valueChanges();
  }

  // getPostsComecandoM(): Observable<Post[]> {
  //   return this.postsColM.valueChanges();
  // }
  //
  // // getMensagens(): Observable<Documents> {
  // //   return this.http.get<Documents>(this.apiPosts);
  // // }
  //
  // enviarMensagem(post: Post) {
  //   this.afs.collection('posts').add({mensagem: post.mensagem});
  //
  //   // colocando o ID na ref para apagar, quando necessário
  //
  //   // this.afs.collection('posts').add({mensagem: post.mensagem}).then(
  //   //   docRef => {
  //   //     console.log('inseriu');
  //   //     this.postsCol.doc(docRef.id).update(
  //   //       {id: docRef.id}
  //   //     );
  //   //   });
  // }
  //
  // apagarMensagem(post) {
  //   this.postsCol.doc(post.id).delete();
  // }
  //
  // getPostsDoUsuario(usuario: string): Observable<Post[]> {
  //   const postsColDoUsuario: AngularFirestoreCollection<Post> = this.afs.collection('posts', ref =>
  //     ref.where('paraUsuario', '==', usuario));
  //   return postsColDoUsuario.valueChanges();
  // }
}
