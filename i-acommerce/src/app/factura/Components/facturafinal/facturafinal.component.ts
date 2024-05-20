import { Component, OnInit } from '@angular/core';
import { WholeInvoice, getWholeInvoice } from 'src/app/RequestAPIs/WholeInvoice/wholeInvoice.service'; 
import { DatosServiceService } from 'src/app/Services/datos-service.service';

@Component({
  selector: 'app-facturafinal',
  templateUrl: './facturafinal.component.html',
  styleUrls: ['./facturafinal.component.scss'],
})
export class FacturafinalComponent implements OnInit {
  invoice: WholeInvoice[] | undefined; 
  error: string | undefined; 

  constructor(private datosService:DatosServiceService) { }

  ngOnInit() {

  }

  async searchInvoice() {
    try {
      const invoices = await getWholeInvoice(this.datosService.getidfactura());
      this.invoice = this.removeDuplicates(invoices, 'id');
      console.log('Factura desde el componente:', this.invoice);
    } catch (error) {
      console.error('Error al obtener la factura:', error);
      this.error = 'No se pudo obtener la factura. Por favor, intente nuevamente.'; // Manejar el error
    }
  }
  
  removeDuplicates(arr: any[], prop: string) {
    return arr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
}
