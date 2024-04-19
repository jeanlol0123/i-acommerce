import { Injectable } from '@angular/core';
import { Factura } from '../modelsPOO/factura.models';
import { metodoPago } from '../modelsPOO/pago.models';
import { RemitenteDestinatario } from '../modelsPOO/remitenteDestinatario.model';
import { producto } from '../modelsPOO/producto.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  facturas: Factura[] = [];

  constructor() {}

  agregarFactura(remitente: RemitenteDestinatario, destinatario: RemitenteDestinatario, productos: producto[], metodoPago: metodoPago) {
    const id = this.facturas.length + 1; 
    const nuevaFactura = new Factura(id, remitente, destinatario, productos, metodoPago);
    this.facturas.push(nuevaFactura);
  }

  obtenerFacturaPorId(id: number): Factura | undefined {
    return this.facturas.find(factura => factura.id === id);
  }

}