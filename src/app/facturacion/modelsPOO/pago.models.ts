export class metodoPago{
    metodo : string;
    banco : string;
    nCuenta : string;

    constructor(metodo:string,banco:string,nCuenta:string){
        this.metodo = metodo;
        this.banco = banco,
        this.nCuenta = nCuenta;
    
    }
}