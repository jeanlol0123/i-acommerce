import {pool} from '../databases/dbConnection.js';
import { productExist } from '../Utilities/Utilities.js';

export const getOrders = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM pedidoproducto');
        res.status(200).json(rows);
    } catch(err){
        res.status(500).json({ message: "Ocurrio un error al buscar pedidoproductos",
        error: err.message});   
    }
}
export const getSingleOrder = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM pedidoproducto WHERE id = ?', id);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha encontrado el pedidoproducto" });
        }
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Ocurrio un error al buscar el pedidoproducto",error:error.message });
    }
}

export const postOrder  =  async (req, res) => {
    try{
        const {idProducto,cantidad} = req.body
        const exist = await productExist(idProducto);
        if(!exist){
            return res.status(404).json({ message: "No se ha encontrado el producto" });
        }
        const [rows] = await pool.query('INSERT INTO pedidoproducto (idProducto,cantidad) VALUES (?,?)',
        [idProducto,cantidad]);
        res.status(201).send({
            id: rows.insertId,
            idProducto,
            cantidad,
        });
    } catch(error){
        res.status(500).json({ message: "Ocurrio un error al crear el Pedido del Producto",error:error.message });
    }

}

export const deleteOrder = async (req, res) => {
    try{
        const id = req.params.id;
        const [rows] = await pool.query('DELETE FROM pedidoproducto WHERE id = ?', id);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha encontrado el pedido del producto." });
        }else{
            return res.status(200).json({ message: "Se ha eliminado el pedido del producto." });
        }
    } catch(error){
        res.status(500).json({ message: "Ocurrió un error al eliminar el pedido del producto",error:error.message });        
    }

}

export const updateOrder = async(req, res) => {
    try{
        const id = req.params.id;
        const {idProducto,cantidad} = req.body
        const exist = await productExist(idProducto);
        if(!exist){
            return res.status(404).json({ message: "No se ha encontrado el producto" });
        }
        const [result] = await pool.query('UPDATE pedidoproducto SET idProducto =?, cantidad =? WHERE id =?',
        [idProducto,cantidad,id]);
        const [rows] = await pool.query('SELECT * FROM pedidoproducto WHERE id = ?', id);
        res.status(200).json(rows);
    } catch(error){
        res.status(500).json({ message: "Ocurrio un error al actualizar el pedido del Producto",error:error.message });
    }

}