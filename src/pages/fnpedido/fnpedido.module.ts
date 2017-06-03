import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FnpedidoPage } from './fnpedido';

@NgModule({
  declarations: [
    FnpedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(FnpedidoPage),
  ],
  exports: [
    FnpedidoPage
  ]
})
export class FnpedidoPageModule {}
