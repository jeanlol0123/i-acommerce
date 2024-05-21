import {pool} from '../databases/dbConnection.js';

export const getProducts = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM producto');
        res.status(200).json(rows);
    } catch(err){
        res.status(500).json({ message: "Ocurrio un error al buscar productos",
        error: err.message});   
    }
}
export const getSingleProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM producto WHERE id = ?', id);

        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha encontrado el producto" });
        }
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Ocurrio un error al buscar el producto",error:error.message });
    }
}

export const postProduct  =  async (req, res) => {
    try{
        const {nombre, costo, stock} = req.body
        const [rows] = await pool.query('INSERT INTO producto (nombre,costo,stock) VALUES (?,?,?)',
        [nombre,costo,stock]);
        res.status(201).send({
            id: rows.insertId,
            nombre,
            costo,
            stock
        });
    } catch(error){
        res.status(500).json({ message: "Ocurrio un error al crear el producto",error:error.message });
    }

}

export const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const [rows] = await pool.query('DELETE FROM producto WHERE id = ?', id);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha encontrado el producto." });
        }else{
            return res.status(200).json({ message: "Se ha eliminado el producto." });
        }
    } catch(error){
        res.status(500).json({ message: "Ocurrió un error al eliminar el producto",error:error.message });        
    }

}

export const updateProduct = async(req, res) => {
    try{
        const id = req.params.id;
        const {nombre, costo, stock} = req.body
        const [result] = await pool.query('UPDATE producto SET nombre =?, costo =?, stock =? WHERE id =?',
        [nombre,costo,stock,id]);
        const [rows] = await pool.query('SELECT * FROM producto WHERE id = ?', id);
        res.status(200).json(rows);
    } catch(error){
        res.status(500).json({ message: "Ocurrio un error al actualizar un producto",error:error.message });
    }

}


export const getProductsByFilter = async (req, res) => {
    try {
      const idFactura = req.params.idFactura; 
      const [rows] = await pool.query(`
      SELECT pedidoproducto.idProducto, producto.nombre, pedidoproducto.cantidad
        FROM pedidoproducto
        INNER JOIN producto ON pedidoproducto.idProducto = producto.id
        WHERE idFactura = ?;` , [idFactura]);
      console.log(rows);
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ message: "Ocurrió un error al buscar los productos", error: error.message });
    }

}
/*
tests:      SELECT pedidoproducto.idProducto, producto.nombre, pedidoproducto.cantidad
FROM pedidoproducto
INNER JOIN producto ON pedidoproducto.idProducto = producto.id WHERE idFactura = CxybapIiz8sQp3ZcakyD;

*/