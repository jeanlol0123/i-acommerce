import axios from "axios";
import { producto } from "src/app/factura/Interfaces/producto.interface";
import { descProducto } from "src/app/factura/Interfaces/productoDescription.interface";

export async function getProducts(): Promise<descProducto[]>{

    let listaProductos : descProducto[] = [];
    try{
        const response = await axios.get('https://iacommerceapi.azurewebsites.net/api/products');
        if (response.data && Array.isArray(response.data)) {
            listaProductos = response.data;
            console.log(listaProductos);
            return listaProductos;
        } else {
            throw new Error("No se han encontrado productos");
        }
    } catch(err){
        console.log("Ha ocurrido un error: ",err);
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
        const response = await axios.post('https://iacommerceapi.azurewebsites.net/api/orderDetail', data);
    } catch(err){
        throw err
    }
}

export async function getFilterProducts(idFactura:string): Promise<producto[]>{

    try{
        const response = await axios.get('https://iacommerceapi.azurewebsites.net/api/productsByInvoice/' + idFactura);
        if (response.data && Array.isArray(response.data)) {
            return response.data;
        } else {
            throw new Error("No se han encontrado productos");
        }
    } catch(err){
        throw err;
    }
}

export async function addProduct(nombre: string, costo: string, stock: string): Promise<boolean> {
    const data = {
        nombre: nombre,
        costo: costo,
        stock: stock
    };

    try {
        const response = await axios.post('https://iacommerceapi.azurewebsites.net/api/product', data);
        console.log("Respuesta del servidor" + response.status);
        return response.status === 201; 
    } catch (err) {
        console.error('Error al agregar el producto:', err);
        return false; 
    }
}


