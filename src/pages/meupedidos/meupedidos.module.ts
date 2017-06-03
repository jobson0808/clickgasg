import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeupedidosPage } from './meupedidos';

@NgModule({
  declarations: [
    MeupedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(MeupedidosPage),
  ],
  exports: [
    MeupedidosPage
  ]
})
export class MeupedidosPageModule {}
