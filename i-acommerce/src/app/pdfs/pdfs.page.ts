import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { WholeInvoice, getWholeInvoice } from 'src/app/RequestAPIs/WholeInvoice/wholeInvoice.service'; 
import { DatosServiceService } from 'src/app/Services/datos-service.service';
import { getFilterProducts } from 'src/app/RequestAPIs/Products/products.service';
import { metodo } from '../factura/Interfaces/metodo.interface';
import { calculoImpuesto, calculoImporte, impuesto } from '../factura/Utilities/calculos.class';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.page.html',
  styleUrls: ['./pdfs.page.scss'],
})
export class PDFsPage implements OnInit {
  totalImpuesto: number;
  metodoPago: metodo;
  totalParcial: number = 0;
  invoice: WholeInvoice[] | undefined; 
  productos: any[];
  error: string | undefined; 
  idFactura: string;

  constructor(private datosService: DatosServiceService) { }

  async ngOnInit() {
    try {
      console.log(this.datosService.getidfactura());
        const invoices = await getWholeInvoice(this.datosService.getidfactura());
        this.productos = await getFilterProducts(this.datosService.getidfactura());
        this.metodoPago = this.datosService.getMetodo();
        this.invoice = removeDuplicates(invoices, 'id');
        this.totalParcial = 0;

        this.productos.forEach((producto) => {
            const valor = Number(producto.precio);
            if (isNaN(valor)) {
                throw new Error(`Precio no válido para el producto: ${producto.nombre}`);
            }

            const impuestoUnitario = impuesto(valor);
            const totalUnitarioConImpuesto = valor + impuestoUnitario;
            const importe = calculoImporte(valor, producto.cantidad, impuestoUnitario * producto.cantidad);
            const total = producto.cantidad * totalUnitarioConImpuesto;

            if (isNaN(impuestoUnitario) || isNaN(importe) || isNaN(total)) {
                throw new Error(`Cálculo no válido para el producto: ${producto.nombre}`);
            }

            producto.impuesto = impuestoUnitario * producto.cantidad;
            producto.importe = importe;
            this.totalParcial += total;
        });

        this.totalImpuesto = impuesto(this.totalParcial);

    } catch (error) {
        console.error('Error al obtener la factura:', error);
        this.error = 'No se pudo obtener la factura. Por favor, intente nuevamente.';
    }
  }

  generatePDF(invoice: WholeInvoice[] | undefined, productos: any[]) {
    console.log(invoice)
    if (invoice) {
      const docDefinition: any = {
        content: [
          { text: 'FACTURA', style: 'header' },
          {
            columns: [
              {
                text: [
                  { text: 'DE\n', style: 'subheader' },
                  `${invoice[0].remitente.nombre}\n${invoice[0].remitente.direccion}\n${invoice[0].remitente.ciudad}\n${invoice[0].remitente.telefono}\n${invoice[0].remitente.correo}`
                ]
              },
              {
                text: [
                  { text: 'COBRAR A\n', style: 'subheader' },
                  `${invoice[0].destinatario.nombre}\n${invoice[0].destinatario.direccion}\n${invoice[0].destinatario.ciudad}\n${invoice[0].destinatario.telefono}\n${invoice[0].destinatario.correo}`
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
              widths: ['*', 'auto', 'auto', 'auto', 'auto'],
              body: [
                ['DESCRIPCIÓN', 'CANT.', 'PRECIO', 'IMPUESTO', 'IMPORTE'],
                ...productos.map((producto) => {
                  return [
                    producto.nombre,
                    producto.cantidad,
                    producto.precio,
                    producto.impuesto,
                    producto.importe
                  ];
                })
              ]
            }
          },
          {
            style: 'totalsTable',
            table: {
              widths: ['*', 'auto'],
              body: [
                ['TOTAL PARCIAL', this.totalParcial.toFixed(2)], 
                ['IMPUESTO (VAT 19%)', this.totalImpuesto.toFixed(2)], 
                [{ text: 'TOTAL', bold: true }, { text: `$${(this.totalParcial + this.totalImpuesto).toFixed(2)}`, bold: true }]
              ]
            }
          },
          {
            text: `METODO PAGO: Tarjeta \n NUMERO: ${this.metodoPago.numero} \n TIPO: ${this.metodoPago.tipo}`,
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
    } else {
      console.log("No se ha encontrado la factura");
    }
  }
}

function removeDuplicates(arr: any[], prop: string) {
  return arr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}