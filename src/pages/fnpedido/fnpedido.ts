import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MeupedidosPage} from '../meupedidos/meupedidos';
//import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-fnpedido',
  templateUrl: 'fnpedido.html',
})
export class FnpedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  altera(){
    this.navCtrl.pop();
  }
//homep(){
 // this.navCtrl.push(HomePage);
//}
ionViewDidLoad() {
    console.log('ionViewDidLoad FnpedidoPage');
  }

}
