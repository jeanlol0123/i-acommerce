import { Component, OnInit,Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { postUser } from 'src/app/RequestAPIs/User/user.service';
import { DatosServiceService } from 'src/app/Services/datos-service.service';
import { usuario } from '../../Interfaces/usuario.interface';
import { crearRelacion } from '../../Utilities/utilities';

import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss'],
})
export class InfoUsuarioComponent implements OnInit {
  @Output() relationValidated: EventEmitter<boolean> = new EventEmitter<boolean>();

  counter: number = 0;
  error: boolean;
  errorMsg: string;
  formData: FormGroup;

  constructor(private datosService: DatosServiceService) {}

  ngOnInit() {
    this.formData = new FormGroup({
      Nombre: new FormControl(),
      Apellido: new FormControl(),
      Direccion: new FormControl(),
      Ciudad: new FormControl(),
      Telefono: new FormControl(),
      Correo: new FormControl(),
    });
  }

  submit() {
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
            this.incrementCounter();
            this.formData.reset();
            this.error = false;
          })
          .catch((error: any) => {
            console.log('Ha ocurrido un error' + error);
            this.error = true;
            this.errorMsg = 'Ha ocurrido un error al crear el remitente' + error;
          });
      } else if (this.counter == 1) {
        postUser(nombre, apellido, direccion, ciudad, telefono, correo)
          .then((destinatario: usuario) => {
            this.datosService.setDestinatario(destinatario.id);
            crearRelacion(this.datosService.getRemitenteId(), this.datosService.getDestinatarioId(),this.datosService)
              .then((validRelation: boolean) => {
                if (validRelation) {
                  this.datosService.setValidRelation();
                  this.relationValidated.emit(true);
                } else {
                  this.error = true;
                  this.errorMsg = 'Ha ocurrido un error al crear la relacion entre el remitente y el destinatario';
                }
              })
              .catch((error) => {
                this.error = true;
                this.errorMsg = 'Ha ocurrido un error al crear la relacion entre el remitente y el destinatario';
              });
          })
          .catch((error: any) => {
            console.log('Ha ocurrido un error' + error);
            this.error = true;
            this.errorMsg = 'Ha ocurrido un error al crear el destinatario';
          });
      }
    }
  }

  incrementCounter(){
    this.counter++;
  }
}