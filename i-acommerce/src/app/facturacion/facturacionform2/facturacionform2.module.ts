import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Facturacionform2PageRoutingModule } from './facturacionform2-routing.module';

import { Facturacionform2Page } from './facturacionform2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Facturacionform2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Facturacionform2Page]
})
export class Facturacionform2PageModule {}
