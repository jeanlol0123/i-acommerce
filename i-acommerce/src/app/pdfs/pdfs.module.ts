import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PDFsPageRoutingModule } from './pdfs-routing.module';

import { PDFsPage } from './pdfs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PDFsPageRoutingModule
  ],
  declarations: [PDFsPage]
})
export class PDFsPageModule {}
