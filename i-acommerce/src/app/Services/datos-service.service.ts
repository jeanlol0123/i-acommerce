import { Injectable } from '@angular/core';
import { usuario } from '../facturacion/interfaces/usuario.interface';
import { producto } from '../facturacion/interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosServiceService {

  private remitenteId: number;
  private destinatarioId: number;
  private relacion:number;
  private productos: producto[] = [];

  constructor() { }

  setRemitenteId(remitenteId: number): void {
    this.remitenteId = remitenteId;
  }

  setDestinatario(destinatarioId: number): void {
    this.destinatarioId = destinatarioId;
  }

  setRelacion(relacionId:number){
    this.relacion = relacionId;
  }

  anadirProductos(producto: producto): void {
    this.productos.push(producto);
  }

  getRemitenteId(): number {
    return this.remitenteId;
  }

  getDestinatarioId(): number {
    return this.destinatarioId;
  }

  getProductos(): producto[] {
    return this.productos;
  }

  getRelacion():number{
    return this.relacion;
  }

  getAllData() {
    const data = {
      remitenteId: this.remitenteId,
      destinatarioId: this.destinatarioId,
      productos: this.productos,
    }
    return data;
  }
}