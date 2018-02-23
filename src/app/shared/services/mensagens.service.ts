import {Injectable} from '@angular/core';
import {Post} from '../model/post';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MensagensService {

  // apiPosts = 'https://firestore.googleapis.com/v1beta1/projects/twitter2-ifpb/databases/(default)/documents/posts';
  postsCol: AngularFirestoreCollection<Post>;
  postsColM: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsCol = afs.collection('posts'); //, ref => ref.where('paraUsuario', '==', ''));
    this.postsColM = afs.collection('posts', ref => ref.where('mensagem', '>',
      '#sabadotematico').where('mensagem', '<', '#sabadotematicoz'));
  }

  getPosts(): Observable<Post[]> {
    const postsTeste = this.afs.firestore.collection('posts').get().then(
      qs => {
        qs.docs.forEach(docRef => {
          this.postsCol.doc(docRef.id).update(
            {id: docRef.id}
          );
        });
      }
    );
    return this.postsCol.valueChanges();
  }

  getPostsComecandoM(): Observable<Post[]> {
    return this.postsColM.valueChanges();
  }

  // getMensagens(): Observable<Documents> {
  //   return this.http.get<Documents>(this.apiPosts);
  // }

  enviarMensagem(post: Post) {
    const indxArroba = post.mensagem.lastIndexOf('@');
    const usuario = post.mensagem.slice(indxArroba + 1);
    this.afs.collection('posts').add({mensagem: post.mensagem, paraUsuario: usuario});

    // TODO colocando o ID na ref para apagar, quando necessário

    // this.afs.collection('posts').add({mensagem: post.mensagem}).then(
    //   docRef => {
    //     console.log('inseriu');
    //     this.postsCol.doc(docRef.id).update(
    //       {id: docRef.id}
    //     );
    //   });
  }

  apagarMensagem(post) {
    this.postsCol.doc(post.id).delete();
  }

  getPostsDoUsuario(usuario: string): Observable<Post[]> {
    const postsColDoUsuario: AngularFirestoreCollection<Post> = this.afs.collection('posts', ref =>
      ref.where('paraUsuario', '==', usuario));
    return postsColDoUsuario.valueChanges();
  }
}
