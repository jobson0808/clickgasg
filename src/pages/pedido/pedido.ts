import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FnpedidoPage} from '../fnpedido/fnpedido';
/**
 * Generated class for the PedidoPage page.do
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
iniciohome(){
this.navCtrl.pop();
}
fnp(){
  this.navCtrl.push(FnpedidoPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

}
