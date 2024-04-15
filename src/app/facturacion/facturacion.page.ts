import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContadorService } from './services/contador.service';
import { RemitenteDestinatario } from './modelsPOO/remitenteDestinatario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.page.html',
  styleUrls: ['./facturacion.page.scss'],
})
export class FacturacionPage implements OnInit {
  constructor(public contadorService: ContadorService,private router:Router){}



  formData: FormGroup;

  ngOnInit() {
    this.formData = new FormGroup({
      Nombre: new FormControl(),
      Direccion: new FormControl(),
      Ciudad: new FormControl(),
      Telefono: new FormControl(),
      Correo: new FormControl()
    });
  }

  onSubmit() { 

      if(this.formData.valid){
        this.contadorService.aumentarContador();

        const nombre:string = this.formData.get('Nombre')?.value;
        const direccion:string = this.formData.get('Direccion')?.value;
        const ciudad:string = this.formData.get('Ciudad')?.value;
        const telefono:string = this.formData.get('Telefono')?.value;
        const correo:string = this.formData.get('Correo')?.value;
        console.log(telefono);
        if(this.contadorService.obtenerContador() == 0 ){
          const remitente = new RemitenteDestinatario(nombre, direccion, ciudad, telefono, correo, true); 
          console.log(remitente);   
          this.formData.reset();  
        }
        else{
          console.log("Valor del Destinatario");
          const destinatario = new RemitenteDestinatario(nombre, direccion, ciudad, telefono, correo, true); 
          console.log(destinatario);  
          this.formData.reset();  
        }
      }
    }

  form2(){
    this.router.navigate(['facturacion/facturacionform2']);

  }
    
  }


