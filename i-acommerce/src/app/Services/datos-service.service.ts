import { Injectable } from '@angular/core';
import { usuario } from '../factura/Interfaces/usuario.interface';
import { producto } from '../factura/Interfaces/producto.interface';
import { metodo } from '../factura/Interfaces/metodo.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosServiceService {
  
  private remitenteId: number;
  private destinatarioId: number;
  private relacion:number;
  private idFactura:string;
  private metodo:metodo;
  private validRelation:boolean = false;
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

  setidFactura(factura:string){
    this.idFactura = factura;
  }

  setMetodo(nombre:string,numero:string,fecha:string,codigo:string,tipo:string){
    this.metodo = {nombre:nombre,numero:numero,fechaExpiracion:fecha,codigo:codigo,tipo:tipo};
  }

  getMetodo(){
    return this.metodo;
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

  getidfactura(){
    return this.idFactura;
  }

  getRelacion():number{
    return this.relacion;
  }

  setValidRelation():boolean{
    this.validRelation = true;
    return this.validRelation;
  }
}


