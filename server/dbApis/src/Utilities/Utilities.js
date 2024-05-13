import {pool} from '../databases/dbConnection.js';


export async function userExists(id) {
    try {
        id=parseInt(id);
        const [rows] = await pool.query('SELECT * FROM persona WHERE id = ?', id);
        return rows.length > 0; 
    } catch (error) {
        console.error("Error al verificar si existe el usuario:", error);
        return false;
    }
}

export async function shipmentExist(id){
    try {
        id=parseInt(id);
        const [rows] = await pool.query('SELECT * FROM relacionesenvio WHERE id = ?', id);
        return rows.length > 0; 
    } catch (error) {
        console.error("Error al verificar si existe el envio:", error);
        return false;
    }
}

export async function productExist(id){
    try {
        id=parseInt(id);
        const [rows] = await pool.query('SELECT * FROM producto WHERE id =?', id);
        return rows.length > 0; 
    } catch (error) {
        console.error("Error al verificar si existe el producto:", error);
        return false;
    }
}