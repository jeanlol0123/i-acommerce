import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContadorService{
    private counter: number = 0;

    constructor(){}

    aumentarContador(){
        this.counter ++;
    }

    obtenerContador(): number{
        return this.counter;
    }
}