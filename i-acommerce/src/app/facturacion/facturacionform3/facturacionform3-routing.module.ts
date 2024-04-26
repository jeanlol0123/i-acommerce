import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Facturacionform3Page } from './facturacionform3.page';

const routes: Routes = [
  {
    path: '',
    component: Facturacionform3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Facturacionform3PageRoutingModule {}
