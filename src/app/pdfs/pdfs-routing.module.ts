import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PDFsPage } from './pdfs.page';

const routes: Routes = [
  {
    path: '',
    component: PDFsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PDFsPageRoutingModule {}
