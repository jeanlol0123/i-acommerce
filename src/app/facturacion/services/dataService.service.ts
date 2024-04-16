import { metodoPago } from "../modelsPOO/pago.models";
import { RemitenteDestinatario } from "../modelsPOO/remitenteDestinatario.model";
import { producto } from "../modelsPOO/producto.model";


export class DataService {
    static idCounter: number = 0; 
    id: number;
    remitente: RemitenteDestinatario;
    destinatario: RemitenteDestinatario;
    listaProductos: producto[];
    pago: metodoPago;
  
    constructor(remitente: RemitenteDestinatario, destinatario: RemitenteDestinatario, listaProductos: producto[], method: metodoPago) {
      this.id = DataService.getNextId(); 
      this.remitente = remitente;
      this.destinatario = destinatario;
      this.listaProductos = listaProductos;
      this.pago = method;
    }
  
    getRemitente(id:number) {
      return this.remitente;
    }
  
    
    private static getNextId(): number {
      return DataService.idCounter++;
    }
  }