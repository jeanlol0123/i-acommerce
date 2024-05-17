import {pool} from '../databases/dbConnection.js';
import { shipmentExist } from '../Utilities/Utilities.js';

export const getInvoices = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM factura');
        res.status(200).json(rows);
    } catch(err){
        res.status(500).json({ message: "Ocurrio un error al buscar facturas",
        error: err.message});   
    }
}
export const getSingleInvoice = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM factura WHERE id = ?', id);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha encontrado la factura" });
        }
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Ocurrio un error al buscar la factura",error:error.message });
    }
}

export const postInvoice  =  async (req, res) => {
    try{
        const {idRelacionesEnvio, fechaGeneracion, fechaVencimiento} = req.body;
        const exist = await shipmentExist(idRelacionesEnvio);
        if(exist){
            const [rows] = await pool.query('INSERT INTO factura (idRelacionesEnvio,fechaCreacion,fechaVencimiento) VALUES (?,?,?)',
            [idRelacionesEnvio, fechaGeneracion, fechaVencimiento]);
            res.status(201).send({
                id: rows.insertId,
                idRelacionesEnvio,
                fechaGeneracion,
                fechaVencimiento
            });
        } else{
            return res.status(404).json({ message: "No se ha encontrado el envio" });
        }
    } catch(error){
        res.status(500).json({ message: "Ocurrio un error al crear la factura",error:error.message });
    }

}

export const deleteInvoice = async (req, res) => {
    try{
        const id = req.params.id;
        const [rows] = await pool.query('DELETE FROM factura WHERE id = ?', id);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha encontrado el factura." });
        }else{
            return res.status(200).json({ message: "Se ha eliminado el factura." });
        }
    } catch(error){
        res.status(500).json({ message: "Ocurrió un error al eliminar el factura",error:error.message });        
    }

}

export const updateInvoice = async(req, res) => {
    try{
        const id = req.params.id;
            const {idRelacionesEnvio, fechaGeneracion, fechaVencimiento} = req.body;
            if (isNaN(parseInt(idRelacionesEnvio ))){
                return res.status(400).json({message:"Ingrese tipos de datos validos"});
            } else{
            const exist = await shipmentExist(idRelacionesEnvio);
            if (exist){
                const [result] = await pool.query('UPDATE factura SET idRelacionesEnvio =?, fechaCreacion =?, fechaVencimiento =? WHERE id =?',
                [idRelacionesEnvio, fechaGeneracion, fechaVencimiento,id]);
                const [rows] = await pool.query('SELECT * FROM factura WHERE id = ?', id);
                res.status(200).json(rows);
            } else{
                return res.status(404).json({ message: "No se ha encontrado el envio"});
            }
        }
    } catch(error){
        res.status(500).json({ message: "Ocurrio un error al actualizar la factura",error:error.message });
    }
}