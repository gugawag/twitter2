import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FirebaseConfig} from '../../../firebase.config';
import {AngularFireModule} from 'angularfire2';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: []
})
export class FirebaseModule { }
