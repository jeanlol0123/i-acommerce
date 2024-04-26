export class producto{
    nombre : string;
    cantidad: number;
    precio : number;
    descuento: number;
    importe : number;

    constructor(nombre: string, cantidad: number, precio: number, descuento: number, importe: number) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.descuento = descuento;
        this.importe = importe;
    }

    total(precio: number, cantidad: number, descuento:number,importe:number) {
      return [(precio * cantidad) * (1 - descuento) + importe];
    }
 
}