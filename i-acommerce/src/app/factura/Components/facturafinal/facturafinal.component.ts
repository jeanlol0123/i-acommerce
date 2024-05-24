import { Component, OnInit } from '@angular/core';
import { WholeInvoice, getWholeInvoice } from 'src/app/RequestAPIs/WholeInvoice/wholeInvoice.service'; 
import { DatosServiceService } from 'src/app/Services/datos-service.service';
import { getFilterProducts } from 'src/app/RequestAPIs/Products/products.service';
import { metodo } from '../../Interfaces/metodo.interface';

@Component({
  selector: 'app-facturafinal',
  templateUrl: './facturafinal.component.html',
  styleUrls: ['./facturafinal.component.scss'],
})
export class FacturafinalComponent implements OnInit {
  metodoPago:metodo;
  invoice: WholeInvoice[] | undefined; 
  productos:any[];
  error: string | undefined; 
  idFactura:string;

  constructor(private datosService:DatosServiceService) { }

  ngOnInit() {

  }

  async searchInvoice() {
    try {
      const invoices = await getWholeInvoice(this.datosService.getidfactura());
      this.productos = await getFilterProducts(this.datosService.getidfactura());
      this.metodoPago = this.datosService.getMetodo();
      this.invoice = this.removeDuplicates(invoices, 'id');

    } catch (error) {
      console.error('Error al obtener la factura:', error);
      this.error = 'No se pudo obtener la factura. Por favor, intente nuevamente.'; 
    }
  }
  
  removeDuplicates(arr: any[], prop: string) {
    return arr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
}



interface finalProd{
  nombre:string,
  precio:number,
  cantidad:number,

}