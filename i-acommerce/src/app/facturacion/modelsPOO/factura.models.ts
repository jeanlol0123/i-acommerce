import { RemitenteDestinatario } from "./remitenteDestinatario.model";
import { producto } from "./producto.model";
import { metodoPago } from "./pago.models";

export class Factura {
  id: number;
  remitente: RemitenteDestinatario;
  destinatario: RemitenteDestinatario;
  productos: producto[];
  metodoPago: metodoPago;

  constructor(id: number, remitente: RemitenteDestinatario, destinatario: RemitenteDestinatario, productos: producto[], metodoPago: metodoPago) {
    this.id = id;
    this.remitente = remitente;
    this.destinatario = destinatario;
    this.productos = productos;
    this.metodoPago = metodoPago;
  }
}
