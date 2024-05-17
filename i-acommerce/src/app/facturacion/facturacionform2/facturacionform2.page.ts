import { Component, OnInit, ViewChild } from '@angular/core';
import {IonModal} from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { descProducto } from '../interfaces/productoDescription.interface';
import { getProducts } from 'src/app/RequestAPIs/Products/products.service';
import { producto } from '../interfaces/producto.interface';
import { DatosServiceService } from 'src/app/Services/datos-service.service';
@Component({
  selector: 'app-facturacionform2',
  templateUrl: './facturacionform2.page.html',
  styleUrls: ['./facturacionform2.page.scss'],
})
export class Facturacionform2Page implements OnInit {

  listaProductosFromBack:descProducto[] = [];
  listaProductosComprar:producto[] = [];

  @ViewChild(IonModal) modal: IonModal;
  formData: FormGroup;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  constructor(private router:Router,private datosService: DatosServiceService) { }

  ngOnInit() {
    this.formData = new FormGroup({
      idProducto : new FormControl(),
      Cantidad: new FormControl(),
      Precio: new FormControl()
    });


    this.verProductos();
  }


  agregarProductos(){
    if(this.formData.valid){
      const idProducto:number = this.formData.get('idProducto')?.value;
      const cantidad:number = this.formData.get('Cantidad')?.value;
      const precio:number = this.formData.get('Precio')?.value;
    }
    this.formData.reset();
  }

  async verProductos(){
    this.listaProductosFromBack = await getProducts();
  }

  cancel(){
    this.modal.dismiss();
  }
  form3(){
    this.router.navigate(['tabs/facturacion/facturacionform3']);
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
