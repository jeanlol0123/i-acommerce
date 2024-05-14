import { RemitenteDestinatario } from "../modelsPOO/remitenteDestinatario.model";
import axios from "axios";


export function postUser(usuario : RemitenteDestinatario){
    axios.post('http://localhost:3000/api/person', {
        nombre:usuario.gnombre,
        apellido:usuario.gapellido,
        direccion:usuario.gdireccion,
        telefono:usuario.gtelefono,
        correo:usuario.gcorreo,
        ciudad:usuario.gciudad
    })
    .then(function(response) {
        console.log('Respuesta del servidor' + response);
        return response;
    })
    .catch(function(error) {
        console.log('Ha ocurrido un error en la comunicacion' + error);
        return error;
    })
}
