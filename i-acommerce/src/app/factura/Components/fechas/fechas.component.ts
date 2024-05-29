import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { slicingDates } from '../../Utilities/utilities';
import { DatosServiceService } from 'src/app/Services/datos-service.service';
import { postInvoice } from 'src/app/RequestAPIs/Invoice/invoices.service';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.scss'],
})
export class FechasComponent implements OnInit {
  @Output() datesValidated: EventEmitter<boolean> = new EventEmitter<boolean>();

  fechaCreacion: string = '';
  fechaVencimiento: string = '';
  fechaActual: string;
  error: boolean;
  errorMsg: string;

  constructor(private datosService: DatosServiceService) {}

  ngOnInit() {
    // Asigna la fecha actual en formato ISO
    this.fechaActual = new Date().toISOString();
    // Inicializa fechaCreacion y fechaVencimiento con fechaActual
    this.fechaCreacion = this.fechaActual;
    this.fechaVencimiento = this.fechaActual;
  }

  async submitDates() {
    this.error = false;
    this.errorMsg = '';

    try {
      this.fechaCreacion = slicingDates(this.fechaCreacion);
      this.fechaVencimiento = slicingDates(this.fechaVencimiento);

      console.log("Id de Relacion: " + this.datosService.getRelacion());
      const idFactura = await postInvoice(
        this.datosService.getRelacion(),
        this.fechaCreacion,
        this.fechaVencimiento,
        this.datosService
      );

      this.datesValidated.emit(true);
    } catch (error) {
      this.error = true;
      this.errorMsg = 'Ha ocurrido un error al crear las fechas de la factura';
    }
  }
}
