import { postshipment } from "src/app/RequestAPIs/User/user.service";
import { DatosServiceService } from "src/app/Services/datos-service.service";

export function crearRelacion(idRemitente: number, idDestinatario: number, datosService: DatosServiceService): Promise<boolean> {
  return postshipment(idRemitente, idDestinatario)
    .then((relacion: number) => {
      datosService.setRelacion(relacion);
      console.log("El numero de la relacion es:" + relacion)
      return true;
    })
    .catch((error: any) => {
      console.log("Ha ocurrido un error" + error);
      return false;
    });
}


export function slicingDates(date: string): string {
  if (!date) {
    throw new Error("Fecha vacía");
  }
  
  const datetime: string = date.slice(0, 10) + ' ' + date.slice(11);

  return datetime;
}