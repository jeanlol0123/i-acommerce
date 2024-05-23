import { Component, OnInit,Output } from '@angular/core';
import { addProduct } from 'src/app/RequestAPIs/Products/products.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss'],
})
export class AgregarProductoComponent  implements OnInit {
  @Output() addproductsvalidated: EventEmitter<boolean> = new EventEmitter<boolean>();
  error=false;
  errorMsg:string;
  counter = 0;
  form = {
    nombre: '',
    costo: '',
    stock: ''
  };

  constructor() { }

  ngOnInit() {
    this.form.nombre = '';
    this.form.costo = '0';
    this.form.stock = '0';
  }

  onSubmit() {
    if(parseInt(this.form.stock) <= 0){
      this.error=true;
      this.errorMsg = "Ingrese porfavor un stock mayor a 0"
    } else if(parseInt(this.form.costo) <= 0){
      this.error=true;
      this.errorMsg = "Ingrese porfavor un costo mayor a 0"
    } else{
      const result = addProduct(this.form.nombre,this.form.costo,this.form.stock);
      this.counter ++;
    }
  }


  terminar(){
    if(this.counter > 0){
      this.addproductsvalidated.emit(true);
    } else {
      this.error=true;
      this.errorMsg = "Ingrese al menos un producto";
    }
  }

}
