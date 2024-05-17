import axios from "axios";
import { descProducto } from "src/app/facturacion/interfaces/productoDescription.interface";

export async function getProducts(): Promise<descProducto[]>{

    let listaProductos : descProducto[] = [];
    try{
        const response = await axios.get('http://localhost:3000/api/products');
        if (response.data && Array.isArray(response.data)) {
            listaProductos = response.data;
            return listaProductos;
        } else {
            throw new Error("No se han encontrado productos");
        }
    } catch(err){
        throw err;
    }
}


export async function postProduct() {
    
}


