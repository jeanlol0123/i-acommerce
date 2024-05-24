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
  showAddProducts = false;
  showMethod = false;
  showInfo=true;
  isCheckedRelation: boolean = false;
  isCheckedDates:boolean = false;
  isCheckedProducts:boolean = false;
  isCheckedAddProducts:boolean = false;
  isCheckedMethod:boolean = false;
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
    this.showAddProducts = true;
  }

  verificacionProductosAnadidos(isValid:boolean){
    this.showAddProducts = false;
    this.isCheckedAddProducts = true;
    this.showProducts = true;
  }


  verificacionProductos(isValid:boolean){
    this.showProducts = false;
    this.isCheckedProducts = true
    //this.showFinalButton = true;
    this.showMethod = true;
  }

  verificacionMetodo(isValid:boolean){
    this.showMethod = false;
    this.isCheckedMethod =true;
    this.showFinalButton = true;
  }

}