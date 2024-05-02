import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturacionPage } from './facturacion.page';

const routes: Routes = [
  {
    path: '',
    component: FacturacionPage
  },  {
    path: 'facturacionform2',
    loadChildren: () => import('./facturacionform2/facturacionform2.module').then( m => m.Facturacionform2PageModule)
  },
  {
    path: 'facturacionform3',
    loadChildren: () => import('./facturacionform3/facturacionform3.module').then( m => m.Facturacionform3PageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturacionPageRoutingModule {}
