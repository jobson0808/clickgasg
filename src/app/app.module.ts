import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {Facebook} from "@ionic-native/facebook";
import firebase from "firebase";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import {PedidoPage}from '../pages/pedido/pedido';
import {FnpedidoPage} from '../pages/fnpedido/fnpedido';
import {MeupedidosPage} from '../pages/meupedidos/meupedidos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// Initialize Firebase
export const firebaseConfg={

   apiKey: "AIzaSyC4CMfYumSXuiy31xJitGj1p9GZgdu_t0Y",
    authDomain: "clickgasg.firebaseapp.com",
    databaseURL: "https://clickgasg.firebaseio.com",
    projectId: "clickgasg",
    storageBucket: "clickgasg.appspot.com",
    messagingSenderId: "752317343922"
}
firebase.initializeApp(firebaseConfg)
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    PedidoPage,
    FnpedidoPage,
    MeupedidosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    PedidoPage,
    FnpedidoPage,
    MeupedidosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

