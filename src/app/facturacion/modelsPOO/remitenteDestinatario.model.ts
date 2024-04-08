export class RemitenteDestinatario{
    private nombre : string;
    private direccion : string;
    private ciudad : string;
    private telefono: string;
    private correo: string;
    private esRemitente: boolean;

    constructor(nombre:string,direccion:string,ciudad:string,telefono:string,correo:string,remitente:boolean) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.telefono = telefono; 
        this.correo = correo;
        this.esRemitente = remitente;
    }
    get gnombre(): string {
        return this.nombre;
    }

    set snombre(value: string) {
        this.nombre = value;
    }

    get gdireccion(): string {
        return this.direccion;
    }

    set sdireccion(value: string) {
        this.direccion = value;
    }

    get gciudad(): string {
        return this.ciudad;
    }

    set sciudad(value: string) {
        this.ciudad = value;
    }

    get gtelefono(): string {
        return this.telefono;
    }

    set stelefono(value: string) {
        this.telefono = value;
    }

    get gcorreo(): string {
        return this.correo;
    }

    set scorreo(value: string) {
        this.correo = value;
    }

    get gesRemitente(): boolean {
        return this.esRemitente;
    }

    set sesRemitente(value: boolean) {
        this.esRemitente = value;
    }
}