import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PedidoPage} from '../pedido/pedido';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

compra(){
  this.navCtrl.push(PedidoPage);
}

}
