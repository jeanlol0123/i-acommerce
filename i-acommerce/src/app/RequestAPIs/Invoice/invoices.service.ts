import axios from "axios";

export async function postInvoice(idRelaciones:number,HoraCreacion:string,HoraVencimiento:string):Promise<String>{
    const data = {
        idRelacionesEnvio: idRelaciones,
        fechaGeneracion: HoraCreacion,
        fechaVencimiento: HoraVencimiento
    }
        try {
          const response = await axios.post('http://localhost:3000/api/invoice', data);
          return response.data.id;
        } catch (err) {
          throw err;
        }
}