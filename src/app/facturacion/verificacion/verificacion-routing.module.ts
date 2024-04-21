import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificacionPage } from './verificacion.page';

const routes: Routes = [
  {
    path: '',
    component: VerificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificacionPageRoutingModule {}
