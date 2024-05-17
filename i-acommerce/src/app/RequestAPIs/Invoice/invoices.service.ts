import axios from "axios";

export async function postInvoice(idRelaciones:number,HoraCreacion:string,HoraVencimiento:string){
    const data = {
        idRelaciones: idRelaciones,
        HoraCreacion: HoraCreacion,
        HoraVencimiento: HoraVencimiento
    }
        try {
          const response = await axios.post('http://localhost:3000/api/invoice', data);
          return response.data.id;
        } catch (err) {
          throw err;
        }
}