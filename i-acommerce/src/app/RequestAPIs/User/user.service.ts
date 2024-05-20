import axios from "axios";
import { usuario } from "src/app/factura/Interfaces/usuario.interface";


export async function postUser(nombre:string,apellido:string,direccion:string,telefono:string,correo:string,ciudad:string){
    let user : usuario;

    const data = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono,
        correo: correo,
        ciudad:ciudad
    }
        try {
          const response = await axios.post('http://localhost:3000/api/person', data);
          user = {id:response.data.id,nombre:response.data.nombre,apellido:response.data.apellido,
            direccion:response.data.direccion,telefono:response.data.telefono,correo:response.data.correo,ciudad:response.data.ciudad}
          return user;
        } catch (err) {
          throw err;
        }
}

export async function postshipment(idRemitente:number,idDestinatario:number){
  const data = {
    idRem: idRemitente,
    idDest: idDestinatario
  }
  try {
    const response = await axios.post('http://localhost:3000/api/shipment', data);
    console.log("Se ha creado la conexion de remitente y destinatario" + response.data.id);
    const id:number = response.data.id;
    return id;
  } catch (err) {
    throw err;
  }
}