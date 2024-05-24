import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { WholeInvoice, getWholeInvoice } from 'src/app/RequestAPIs/WholeInvoice/wholeInvoice.service'; 
import { DatosServiceService } from 'src/app/Services/datos-service.service';
import { getFilterProducts } from 'src/app/RequestAPIs/Products/products.service';
import { metodo } from '../factura/Interfaces/metodo.interface';


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.page.html',
  styleUrls: ['./pdfs.page.scss'],
})
export class PDFsPage implements OnInit {
  metodoPago:metodo;
  invoice: WholeInvoice[] | undefined; 
  productos:any[];
  error: string | undefined; 
  idFactura:string;



  constructor(private datosService:DatosServiceService) { }



  async ngOnInit() {
    try {
      const invoices = await getWholeInvoice("YHl7W5hkmSd1WDmcgqkE");
      this.productos = await getFilterProducts("YHl7W5hkmSd1WDmcgqkE");
      this.metodoPago = this.datosService.getMetodo();
      this.invoice = removeDuplicates(invoices, 'id');
      console.log(this.productos);
      console.log(this.invoice);

    } catch (error) {
      console.error('Error al obtener la factura:', error);
      this.error = 'No se pudo obtener la factura. Por favor, intente nuevamente.'; 
    }
  }

  generatePDF(invoice: WholeInvoice[] | undefined, productos: any[]) {
    if(invoice){
      const docDefinition: any = {
        content: [
          { text: 'FACTURA', style: 'header' },
          {
            columns: [
              {
                text: [
                  { text: 'DE\n', style: 'subheader' },
                  invoice[0].remitente.nombre + '\n' +
                  invoice[0].remitente.direccion +'\n' +
                  invoice[0].remitente.ciudad +'\n' +
                  invoice[0].remitente.telefono + '\n' +
                  invoice[0].remitente.correo 
                ]
              },
              {
                text: [
                  { text: 'COBRAR A\n', style: 'subheader' },
                  invoice[0].destinatario.nombre + '\n' +
                  invoice[0].destinatario.direccion +'\n' +
                  invoice[0].destinatario.ciudad +'\n' +
                  invoice[0].destinatario.telefono + '\n' +
                  invoice[0].destinatario.correo 
                ]
              }
            ]
          },
          {
            columns: [
              {
                text: [
                  { text: 'Nº DE FACTURA\n', style: 'subheader' },
                  invoice[0].id
                ]
              },
              {
                text: [
                  { text: 'FECHA DE CREACIÓN\n', style: 'subheader' },
                  invoice[0].fechaCreacion
                ]
              },
              {
                text: [
                  { text: 'FECHA VENCIMIENTO\n', style: 'subheader' },
                  invoice[0].fechaVencimiento
                ]
              }
            ]
          },
          {
            style: 'tableExample',
            table: {
              headerRows: 1,
              widths: [ '*', 'auto', 'auto', 'auto', 'auto', 'auto' ],
              body: [
                [ 'DESCRIPCIÓN', 'CANT.', 'PRECIO', 'DESCUENTO', 'IMPUESTO', 'IMPORTE' ],
                [ 'Apple Watch SE (GPS, 44mm)', '5', '$279', '3%', '5%', '$1,425' ],
                [ 'Enrutador WiFi inteligente TP-Link AC1750', '10', '$56', '5%', '10%', '$595' ],
                [ 'Interruptor de nintendo Con azul neón y rojo neón', '20', '$299', '', '5%', '$6,279' ],
                [ 'Portátil Acer Aspire 5 Slim\nPantalla IPS Full HD de 15,6 pulgadas, AMD Ryzen 3 3200U', '5', '$364', '', '', '$1,824' ],
              ]
            }
          },
          {
            style: 'totalsTable',
            table: {
              widths: [ '*', 'auto' ],
              body: [
                [ 'TOTAL PARCIAL', '$10,125' ],
                [ 'DESCUENTO (5%)', '-$506' ],
                [ 'IMPUESTO (VAT 5.5%)', '$529' ],
                [ 'ENVÍO', '$100' ],
                [ { text: 'TOTAL', bold: true }, { text: '$10,248', bold: true } ],
              ]
            }
          },
          {
            text: 'METODO PAGO:Tarjta \n NUMERO:' +
            this.metodoPago.numero + '\n TIPO: ' +
            this.metodoPago.tipo,
          },
          {
            text: 'TÉRMINOS & Y CONDICIONES\nEl pago se realizará en un plazo de 7 días.',
            margin: [0, 20, 0, 0]
          }
        ],
        styles: {
          header: {
            fontSize: 22,
            bold: true,
            alignment: 'center',
            margin: [0, 0, 0, 20]
          },
          subheader: {
            fontSize: 12,
            bold: true,
            margin: [0, 10, 0, 5]
          },
          tableExample: {
            margin: [0, 20, 0, 20]
          },
          totalsTable: {
            margin: [0, 10, 0, 20]
          }
        },
        defaultStyle: {
          fontSize: 10,
          columnGap: 20,
        }
      };
      pdfMake.createPdf(docDefinition).download('Factura.pdf');
    } else{
      console.log("No se ha encontrado la factura");
    }
    

  }

}

function removeDuplicates(arr: any[], prop: string) {
  return arr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}


