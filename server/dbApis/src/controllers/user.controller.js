import {pool} from '../databases/dbConnection.js';



export const getPersons = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM persona');
        res.status(200).json(rows);
    } catch(err){
        res.status(500).json({ message: "Ocurrio un error al buscar usuarios",
        error: err.message});   
    }
}
export const getSinglePerson = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM persona WHERE id = ?', id);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha encontrado el usuario." });
        }
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Ocurrió un error al buscar el usuario.",error:error.message });
    }
}


export const postPerson  =  async (req, res) => {
    try{
        const {nombre,apellido,direccion,telefono,correo} = req.body
        const [rows] = await pool.query('INSERT INTO persona (nombre,apellido,direccion,telefono,correo) VALUES (?,?,?,?,?)',
        [nombre,apellido,direccion,telefono,correo]);
        res.status(201).send({
            id: rows.insertId,
            nombre,
            apellido,
            direccion,
            telefono,
            correo
        });
    } catch(error){
        res.status(500).json({ message: "Ocurrió un error al crear el usuario",error:error.message });
    }

}

export const deletePersons = async (req, res) => {
    try{
        const id = req.params.id;
        const [rows] = await pool.query('DELETE FROM persona WHERE id = ?', id);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha encontrado el usuario." });
        }else{
            return res.status(200).json({ message: "Se ha eliminado el usuario." });
        }
    } catch(error){
        res.status(500).json({ message: "Ocurrió un error al eliminar un usuario",error:error.message });        
    }

}

export const updatePerson = async(req, res) => {
    try{
        const id = req.params.id;
        const {nombre,apellido,direccion,telefono,correo} = req.body
        const [result] = await pool.query('UPDATE persona SET nombre =?, apellido =?, direccion =?, telefono =?, correo =? WHERE id =?',
        [nombre,apellido,direccion,telefono,correo,id]);
        const [rows] = await pool.query('SELECT * FROM persona WHERE id = ?', id);
        res.status(200).json(rows);
    } catch(error){
        res.status(500).json({ message: "Ocurrió un error al actualizar el usuario",error:error.message });
    }

}