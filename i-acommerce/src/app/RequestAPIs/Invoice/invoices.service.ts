import axios from "axios";
import { DatosServiceService } from "src/app/Services/datos-service.service";

export async function postInvoice(idRelaciones:number,HoraCreacion:string,HoraVencimiento:string,datosService:DatosServiceService):Promise<String>{
    const data = {
        idRelacionesEnvio: idRelaciones,
        fechaGeneracion: HoraCreacion,
        fechaVencimiento: HoraVencimiento
    }
        try {
          const response = await axios.post('https://iacommerceapi.azurewebsites.net/api/invoice', data);
          let dataReceived = await datosService.setidFactura(response.data.id as string);
          return response.data.id;
        } catch (err) {
          throw err;
        }
}