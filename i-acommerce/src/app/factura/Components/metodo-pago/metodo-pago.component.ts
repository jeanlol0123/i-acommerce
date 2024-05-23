import { Component, OnInit,Output } from '@angular/core';
import { DatosServiceService } from 'src/app/Services/datos-service.service';
import { EventEmitter } from '@angular/core';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.scss'],
})
export class MetodoPagoComponent  implements OnInit {
  @Output() methodValidated: EventEmitter<boolean> = new EventEmitter<boolean>();
  error:boolean = false;
  errorMsg:string='';
  protected readonly cardMask: MaskitoOptions = {
    mask: [
        ...new Array(4).fill(/\d/),
        ' ',
        ...new Array(4).fill(/\d/),
        ' ',
        ...new Array(4).fill(/\d/),
        ' ',
        ...new Array(4).fill(/\d/),
        ' ',
        ...new Array(3).fill(/\d/),
    ],
};

protected readonly expiredMask = maskitoDateOptionsGenerator({
  mode: 'mm/yy',
  separator: '/',
});

  readonly dateMask: MaskitoOptions = {
    mask: [
      /[01]/, 
      /[0-9]/, 
      '/', 
      /[2]/, 
      /[0-9]/, 
    ],
  };

  protected readonly cvvMask: MaskitoOptions = {
    
    mask: [...new Array(3).fill(/\d/)],
};

  nombreTarjeta: string;
  numeroTarjeta: string;
  fechaExpiracion: string;
  cvv: string;
  tipoTarjeta: string;

  constructor(private datosService:DatosServiceService) { }

  ngOnInit() {}

  submitForm() {
    if (
      this.nombreTarjeta &&
      this.numeroTarjeta &&
      this.fechaExpiracion &&
      this.cvv &&
      this.tipoTarjeta
    ) {
      this.datosService.setMetodo(
        this.nombreTarjeta,
        this.numeroTarjeta,
        this.fechaExpiracion,
        this.cvv,
        this.tipoTarjeta
      );
      this.methodValidated.emit(true);
    } else {
      this.error=true;
      this.errorMsg = 'Por favor, completa todos los campos antes de enviar el formulario.';
    }
  }

  readonly maskPredicate: MaskitoElementPredicate = (el) => (el as HTMLIonInputElement).getInputElement();
}