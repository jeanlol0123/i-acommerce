export class RemitenteDestinatario {
    private nombre: string;
    private direccion: string;
    private ciudad: string;
    private telefono: string;
    private correo: string;
    private esRemitente: boolean;
  
    constructor(nombre: string, direccion: string, ciudad: string, telefono: string, correo: string, remitente: boolean) {
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
  
    get gdireccion(): string {
      return this.direccion;
    }
  
  
    get gciudad(): string {
      return this.ciudad;
    }
  
    get gtelefono(): string {
      return this.telefono;
    }

  
    get gcorreo(): string {
      return this.correo;
    }

  
    get gesRemitente(): boolean {
      return this.esRemitente;
    }
  }