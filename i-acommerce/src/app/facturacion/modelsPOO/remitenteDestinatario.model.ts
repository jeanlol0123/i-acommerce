export class RemitenteDestinatario {
    private nombre: string;
    private apellido:string;
    private direccion: string;
    private ciudad: string;
    private telefono: string;
    private correo: string;
  
    constructor(nombre: string,apellido:string, direccion: string, ciudad: string, telefono: string, correo: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.ciudad = ciudad;
      this.telefono = telefono;
      this.correo = correo;
    }
  
    get gnombre(): string {
      return this.nombre;
    }

    get gapellido():string{
      return this.apellido;
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

    set snombre(nombre:string){
      this.nombre = nombre;
    }

    
  set sapellido(apellido: string) {
    this.apellido = apellido;
  }

  set sdireccion(direccion: string) {
    this.direccion = direccion;
  }

  set sciudad(ciudad: string) {
    this.ciudad = ciudad;
  }

  set stelefono(telefono: string) {
    this.telefono = telefono;
  }

  set scorreo(correo: string) {
    this.correo = correo;
  }
  }