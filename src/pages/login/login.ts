import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Facebook} from "@ionic-native/facebook";
import firebase from "firebase";

import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public facebook:Facebook ) {}

fblogin(){
  this.facebook.login(["email"]).then(res=>{
    const fc=firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
    firebase.auth().signInWithCredential(fc).then(fs=>{
    this.navCtrl.setRoot(HomePage);
    }).catch(err=>{
      alert("Erro na conecxão")
    })
  }).catch(err=>{
    alert(JSON.stringify(err))
  })
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}