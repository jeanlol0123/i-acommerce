import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { producto } from '../../Interfaces/producto.interface';
import { IonModal } from '@ionic/angular';
import { DatosServiceService } from 'src/app/Services/datos-service.service';
import { getProducts, postProduct } from 'src/app/RequestAPIs/Products/products.service';
import { descProducto } from '../../Interfaces/productoDescription.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  error: boolean;
  errorMsg: string;
  id: number;
  cantidad: number;
  listaProduct: productCarrito[] = [];

  @ViewChild(IonModal) modal: IonModal;
  @Output() productsValidated: EventEmitter<boolean> = new EventEmitter<boolean>();

  listaProductos: descProducto[] = [];
  carritoProductos: productCarrito[] = [];

  constructor(private datoService: DatosServiceService) { }

  async ngOnInit() {
    try {
      this.listaProductos = await getProducts();
    } catch (error) {
      console.log(error);
      this.error = true;
      this.errorMsg = 'Ha ocurrido un error al obtener la lista de productos';
    }
  }

  async agregarProducto() {
    if (!this.id || !this.cantidad) {
      this.error = true;
      this.errorMsg = 'Por favor, seleccione un producto y especifique la cantidad';
      return;
    }

    const producto: productCarrito = {
      id: this.id,
      cantidad: this.cantidad
    }

    try {
      await postProduct(this.datoService.getidfactura(), this.id, this.cantidad);
      this.carritoProductos.push(producto);
    } catch (error) {
      console.log(error);
      this.error = true;
      this.errorMsg = 'Ha ocurrido un error al agregar el producto al carrito';
    }
  }

  terminar() {
    if (this.carritoProductos.length > 0) {
      this.productsValidated.emit(true);
    } else {
      this.error = true;
      this.errorMsg = 'Agrege al menos un producto al carro para continuar';
    }
  }

  confirm() {
    this.modal.dismiss('confirm');
  }

}

interface productCarrito {
  id: number,
  cantidad: number
}