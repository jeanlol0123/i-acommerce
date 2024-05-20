import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { usuario } from './interfaces/usuario.interface';
import { postUser, postshipment } from '../RequestAPIs/User/user.service';
import { DatosServiceService } from '../Services/datos-service.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { crearRelacion } from '../factura/Utilities/utilities';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.page.html',
  styleUrls: ['./facturacion.page.scss'],
})
export class FacturacionPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  counter: number = 0;
  formData: FormGroup;
  canCreate = false;
  message: string = '';

  constructor(private router: Router, private datosService: DatosServiceService) {}

  ngOnInit() {
    this.formData = new FormGroup({
      Nombre: new FormControl(),
      Apellido: new FormControl(),
      Direccion: new FormControl(),
      Ciudad: new FormControl(),
      Telefono: new FormControl(),
      Correo: new FormControl()
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      const nombre: string = this.formData.get('Nombre')?.value;
      const apellido: string = this.formData.get('Apellido')?.value;
      const direccion: string = this.formData.get('Direccion')?.value;
      const ciudad: string = this.formData.get('Ciudad')?.value;
      const telefono: string = this.formData.get('Telefono')?.value;
      const correo: string = this.formData.get('Correo')?.value;

      if (this.counter == 0) {
        postUser(nombre, apellido, direccion, ciudad, telefono, correo)
          .then((remitente: usuario) => {
            this.datosService.setRemitenteId(remitente.id);
            this.counter += 1;
            this.formData.reset();

          })
          .catch((error: any) => {
            console.log("Ha ocurrido un error" + error);
          })
      } else {
        postUser(nombre, apellido, direccion, ciudad, telefono, correo)
          .then((destinatario: usuario) => {
            this.datosService.setDestinatario(destinatario.id);
            crearRelacion(this.datosService.getRemitenteId(), destinatario.id,this.datosService);
            this.counter += 1;
          })
          .catch((error: any) => {
            console.log("Ha ocurrido un error" + error);
          })
          

      }
    }
  }



  aumentarContador(){
    this.counter += 1;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}