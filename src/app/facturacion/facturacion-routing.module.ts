import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturacionPage } from './facturacion.page';

const routes: Routes = [
  {
    path: '',
    component: FacturacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturacionPageRoutingModule {}
