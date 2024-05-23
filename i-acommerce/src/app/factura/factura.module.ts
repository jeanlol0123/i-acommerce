
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FacturaPageRoutingModule } from './factura-routing.module';

import { InfoUsuarioComponent } from './Components/info-usuario/info-usuario.component';
import { FechasComponent } from './Components/fechas/fechas.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { FacturafinalComponent } from './Components/facturafinal/facturafinal.component';

import { FacturaPage } from './factura.page';
import { AgregarProductoComponent } from './Components/agregar-producto/agregar-producto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    FacturaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FacturaPage, InfoUsuarioComponent,FechasComponent,ProductosComponent,FacturafinalComponent,AgregarProductoComponent], 
  exports: [InfoUsuarioComponent] 
})
export class FacturaPageModule {}