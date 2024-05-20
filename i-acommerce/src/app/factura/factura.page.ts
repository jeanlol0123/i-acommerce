import { Component, OnInit } from '@angular/core';
import { DatosServiceService } from '../Services/datos-service.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {
  showInfoUser = true;
  showDates = false;
  showProducts = false;
  showFinalButton = false;
  isCheckedRelation: boolean = false;
  isCheckedDates:boolean = false;
  isCheckedProducts:boolean = false;
  constructor(private datosService: DatosServiceService) { }

  ngOnInit() {}

  handleRelationValidated(isValid: boolean) {
    this.showInfoUser = !isValid;
    this.isCheckedRelation = true 
    this.showDates = true;
  }

  verificacionFechas(isValid:boolean){
    this.showDates = false;
    this.isCheckedDates = true;
    this.showProducts = true;
  }


  verificacionProductos(isValid:boolean){
    this.showProducts = false;
    this.isCheckedProducts = true
    this.showFinalButton = true;
  }





}