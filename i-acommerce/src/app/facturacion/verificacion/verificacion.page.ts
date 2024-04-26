import { Component, OnInit } from '@angular/core';
import { Factura } from '../modelsPOO/factura.models'; // Importa el modelo Factura

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage implements OnInit {
  factura: Factura; 

  constructor() { }

  ngOnInit() {
    // Aquí deberías recibir la instancia de Factura desde la página anterior (facturacionform3)
    // Por simplicidad, asumiré que la factura se pasa como parámetro en el enrutamiento
    this.factura = history.state.factura;
  }
}