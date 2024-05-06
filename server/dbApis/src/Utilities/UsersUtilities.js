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