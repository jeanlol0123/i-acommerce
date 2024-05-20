
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FacturaPageRoutingModule } from './factura-routing.module';

import { InfoUsuarioComponent } from './Components/info-usuario/info-usuario.component';
import { FechasComponent } from './Components/fechas/fechas.component';
import { ProductosComponent } from './Components/productos/productos.component';

import { FacturaPage } from './factura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    FacturaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FacturaPage, InfoUsuarioComponent,FechasComponent,ProductosComponent], 
  exports: [InfoUsuarioComponent] 
})
export class FacturaPageModule {}