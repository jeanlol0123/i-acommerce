import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { producto } from '../modelsPOO/producto.model';
@Component({
  selector: 'app-facturacionform2',
  templateUrl: './facturacionform2.page.html',
  styleUrls: ['./facturacionform2.page.scss'],
})
export class Facturacionform2Page implements OnInit {
  formData: FormGroup;
  constructor(private router:Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      Nombre: new FormControl(),
      Cantidad: new FormControl(),
      Precio: new FormControl(),
      Descuento: new FormControl(),
      Impuesto: new FormControl(),
      Importe: new FormControl()
    });
  }


  agregarProductos(){
    if(this.formData.valid){
      const nombre:string = this.formData.get('Nombre')?.value;
      const cantidad:number = this.formData.get('Cantidad')?.value;
      const precio:number = this.formData.get('Precio')?.value;
      const descuento:number = this.formData.get('Descuento')?.value;
      const impuesto:number = this.formData.get('Impuesto')?.value;
      const importe:number = this.formData.get('Importe')?.value;

      const Producto = new producto(nombre,cantidad,precio,descuento,importe);
      console.log(Producto);
    }
    this.formData.reset();
  }

  form3(){
    this.router.navigate(['tabs/facturacion/facturacionform3']);
  }

}
