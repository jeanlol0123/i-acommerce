import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { metodoPago } from '../modelsPOO/pago.models';

@Component({
  selector: 'app-facturacionform3',
  templateUrl: './facturacionform3.page.html',
  styleUrls: ['./facturacionform3.page.scss'],
})
export class Facturacionform3Page implements OnInit {

  formData: FormGroup;
  constructor(private router:Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      Metodo: new FormControl(),
      NombreBanco: new FormControl(),
      Precio: new FormControl     
    })
  }

  pdfLogic(){
    const metodo:string = this.formData.get('Metodo')?.value;
    const nombreBanco:string = this.formData.get('NombreBanco')?.value;
    const nCuenta:string = this.formData.get('Precio')?.value;

    const method = new metodoPago(metodo,nombreBanco,nCuenta);

    this.router.navigate(['tabs/facturacion/verificacion']);



  }

}
