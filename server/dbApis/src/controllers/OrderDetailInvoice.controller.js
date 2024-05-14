import {pool} from '../databases/dbConnection.js';
import { facturaExist } from '../Utilities/Utilities.js';
import { pedidoProductoExist } from '../Utilities/Utilities.js';
export const getOrderInvoices = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM facturaproducto');
        res.status(200).json(rows);
    } catch(err){
        res.status(500).json({ message: "Ocurrio un error al buscar facturaproductos",
        error: err.message});   
    }
}
export const getSingleOrderInvoice = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM facturaproducto WHERE id = ?', id);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha encontrado el facturaproducto" });
        }
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Ocurrio un error al buscar el facturaproducto",error:error.message });
    }
}

export const postOrderInvoice  =  async (req, res) => {
    try{
        const {idFactura,idPedidoProducto} = req.body
        const exist = await facturaExist(idFactura);
        const exist2 = await pedidoProductoExist(idPedidoProducto);
        if(exist == false || exist2 == false){
            return res.status(404).json({ message: "No se ha encontrado alguno de los datos" });
        }
        const [rows] = await pool.query('INSERT INTO facturaproducto (idFactura,idPedidoproducto) VALUES (?,?)',
        [idFactura,idPedidoProducto]);
        res.status(201).send({
            id: rows.insertId,
            idFactura,
            idPedidoProducto
        });
    } catch(error){
        res.status(500).json({ message: "Ocurrio un error al crear la factura del producto",error:error.message });
    }

}

export const deleteOrderInvoice = async (req, res) => {
    try{
        const id = req.params.id;
        const [rows] = await pool.query('DELETE FROM facturaproducto WHERE id = ?', id);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha encontrado la factura del producto" });
        }else{
            return res.status(200).json({ message: "Se ha eliminado la factura del producto" });
        }
    } catch(error){
        res.status(500).json({ message: "Ocurrió un error al eliminar la factura del producto",error:error.message });        
    }
}

export const updateOrderInvoice = async(req, res) => {
    try{
        const id = req.params.id;
        const {idFactura,idPedidoProducto} = req.body;
        const exist = await facturaExist(idFactura);
        const exist2 = await pedidoProductoExist(idPedidoProducto);
        if(!exist || !exist2){
            return res.status(404).json({ message: "No se ha encontrado alguno de los datos" });
        }
        const [result] = await pool.query('UPDATE facturaproducto SET idFactura =?, idPedidoProducto =? WHERE id =?',
        [idFactura,idPedidoProducto,id]);
        const [rows] = await pool.query('SELECT * FROM facturaproducto WHERE id = ?', id);
        res.status(200).json(rows);
    } catch(error){
        res.status(500).json({ message: "Ocurrio un error al actualizar la factura del producto",error:error.message });
    }
}