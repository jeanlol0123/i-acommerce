import { Component, OnInit,Output } from '@angular/core';
import { slicingDates } from '../../Utilities/utilities';
import { DatosServiceService } from 'src/app/Services/datos-service.service';
import { postInvoice } from 'src/app/RequestAPIs/Invoice/invoices.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.scss'],
})
export class FechasComponent implements OnInit {
  @Output() datesValidated: EventEmitter<boolean> = new EventEmitter<boolean>();

  fechaCreacion: string = '';
  fechaVencimiento: string = '';

  constructor(private datosService:DatosServiceService) { }

  ngOnInit() {}

  async submitDates() {
    try {
      this.fechaCreacion = slicingDates(this.fechaCreacion);
      this.fechaVencimiento = slicingDates(this.fechaVencimiento);
  
      console.log("Id de Relacion: " + this.datosService.getRelacion());
      const idFactura = await postInvoice(this.datosService.getRelacion(), this.fechaCreacion, this.fechaVencimiento);
      this.datosService.setidFactura(idFactura as string);
      this.datesValidated.emit(true);
    } catch (error) {
      console.log("Ha ocurrido un error" + error);
      this.datesValidated.emit(false);
    }
  }
}