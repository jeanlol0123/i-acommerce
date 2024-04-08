import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContadorService } from './services/contador.service';
import { RemitenteDestinatario } from './modelsPOO/remitenteDestinatario.model';
import { producto } from './modelsPOO/producto.model';
import { metodoPago } from './modelsPOO/pago.models';
@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.page.html',
  styleUrls: ['./facturacion.page.scss'],
})
export class FacturacionPage implements OnInit {
  constructor(public contadorService: ContadorService){}



  formData: FormGroup;

  ngOnInit() {
    this.formData = new FormGroup({
      Nombre: new FormControl(),
      Direccion: new FormControl(),
      Ciudad: new FormControl(),
      Telefono: new FormControl(),
      Correo: new FormControl()
    });
  }

  onSubmit() {
    //En esta parte del codigo se deben enviar los datos a alguna parte, osease a la libreria que creara el PDF, por ahora creare objetos con cada input que se da
    if(this.contadorService.obtenerContador() == 0 ){
      if(this.formData.valid){
        this.contadorService.aumentarContador();
        this.formData.reset();  
        const nombre:string = this.formData.get('Nombre')?.value ?? '';
        const direccion:string = this.formData.get('Direccion')?.value ?? '';
        const ciudad:string = this.formData.get('Ciudad')?.value ?? '';
        const telefono:string = this.formData.get('Telefono')?.value ?? '';
        const correo:string = this.formData.get('Correo')?.value ?? '';
        const remitente = new RemitenteDestinatario(nombre, direccion, ciudad, telefono, correo, true);    
        console.log("Se creo el objeto correctamente");
        console.log(remitente)
      }
    }
    
  }

}
