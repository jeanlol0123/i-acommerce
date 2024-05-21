import axios from "axios";
import { producto } from "src/app/factura/Interfaces/producto.interface";
import { descProducto } from "src/app/factura/Interfaces/productoDescription.interface";

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


export async function postProduct(idFactura:string,idProducto:number,cantidad:number) {
    const data = {
            "idProducto": idProducto,
            "idFactura":idFactura,
            "cantidad": cantidad
    }

    try{
        const response = await axios.post('http://localhost:3000/api/orderDetail', data);
    } catch(err){
        throw err
    }
}

export async function getFilterProducts(idFactura:string): Promise<producto[]>{

    try{
        const response = await axios.get('http://localhost:3000/api/productsByInvoice/' + idFactura);
        if (response.data && Array.isArray(response.data)) {
            return response.data;
        } else {
            throw new Error("No se han encontrado productos");
        }
    } catch(err){
        throw err;
    }
}


