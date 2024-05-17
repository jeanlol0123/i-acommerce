import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage implements OnInit {


  constructor() { }

  ngOnInit() {
    // Aquí deberías recibir la instancia de Factura desde la página anterior (facturacionform3)
    // Por simplicidad, asumiré que la factura se pasa como parámetro en el enrutamiento
  }
}