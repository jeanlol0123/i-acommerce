import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Facturacionform2Page } from './facturacionform2.page';

const routes: Routes = [
  {
    path: '',
    component: Facturacionform2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Facturacionform2PageRoutingModule {}
