import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Facturacionform3PageRoutingModule } from './facturacionform3-routing.module';

import { Facturacionform3Page } from './facturacionform3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Facturacionform3PageRoutingModule
  ],
  declarations: [Facturacionform3Page]
})
export class Facturacionform3PageModule {}
