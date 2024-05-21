import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.page.html',
  styleUrls: ['./pdfs.page.scss'],
})
export class PDFsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generatePDF() {
  /*
    const docDefinition = {
      content: [
        { text: 'FACTURA', style: 'header' },
        {
          columns: [
            {
              text: [
                { text: 'DE\n', style: 'subheader' },
                'García\nAvenida de la Virgen del Carmen 78\n28008 Madrid\n(408) 222-0000\ngarcía@gulooloo.com\nhttps://www.guloolootech.com/\n'
              ]
            },
            {
              text: [
                { text: 'COBRAR A\n', style: 'subheader' },
                'Ruiz\nAvenida de las ruedas 28\n22226 Madrid\n(508) 111-2222\nruiz@demo.com\n'
              ]
            }
          ]
        },
        {
          columns: [
            {
              text: [
                { text: 'Nº DE FACTURA\n', style: 'subheader' },
                'INV00001\n'
              ]
            },
            {
              text: [
                { text: 'FECHA DE CREACIÓN\n', style: 'subheader' },
                '21/05/2024\n'
              ]
            },
            {
              text: [
                { text: 'FECHA VENCIMIENTO\n', style: 'subheader' },
                '28/05/2024\n'
              ]
            },
            {
              text: [
                { text: 'Nº DE PEDIDO\n', style: 'subheader' },
                'PO100056\n'
              ]
            }
          ]
        },
        {
          style: 'tableExample',
          table: {
            widths: [ '*', 'auto', 'auto', 'auto', 'auto' ],
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
          text: 'MÉTODO DE PAGO\nPaypal: garcia@billing.com\nBanco: Banco de España\n123-4567-1234\n'
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


  }
*/
  }
}
