import { pool } from "../databases/dbConnection.js";
import { userExists } from "../Utilities/Utilities.js";

export const getShipments = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM relacionesenvio");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({
      message: "Ocurrio un error al traer la informacion del envio",
      error: err.message,
    });
  }
};
export const getSingleShipment = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM relacionesenvio WHERE id = ?",
      id
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "No se ha encontrado el envio" });
    }
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: "Ocurrio un error al buscar el envio",
      error: error.message,
    });
  }
};

export const postShipment = async (req, res) => {
  try {
    console.log(`Received request to create a new shipment.`);
    const { idRem, idDest } = req.body;
    console.log(`idRem: ${idRem}, idDest: ${idDest}`);
    if (isNaN(parseInt(idRem)) || isNaN(parseInt(idDest))) {
      console.log(`Invalid data types provided`);
      res
        .status(400)
        .json({ message: "Inserte Tipos de datos que sean validos" });
    } else {
      const ids = [parseInt(idRem), parseInt(idDest)];
      const [verIds] = await pool.query(
        "SELECT * FROM persona WHERE id IN (?, ?)",
        ids
      );
      console.log(`Verified IDs: ${JSON.stringify(verIds)}`);
      if (verIds.length == 0) {
        console.log("No se ha encontrado el id del usuario");
        return res
          .status(404)
          .json({ message: "No se ha encontrado el id del usuario" });
      } else {
        const [rows] = await pool.query(
          "INSERT INTO relacionesenvio (remitente,destinatario) VALUES (?,?)",
          ids
        );
        console.log(`Inserted shipment with ID: ${rows.insertId}`);
        res.status(201).send({
          id: rows.insertId,
          idRem,
          idDest,
        });
      }
    }
  } catch (error) {
    console.log(`Error creating shipment: ${error}`);
    res.status(500).json({
      message: "Ocurrio un error al crear un envio",
      error: error.message,
    });
  }
};

export const deleteShipment = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query(
      "DELETE FROM relacionesenvio WHERE id = ?",
      id
    );
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No se ha encontrado el pedido." });
    } else {
      return res.status(200).json({ message: "Se ha eliminado el pedido." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Ocurrió un error al eliminar el pedido",
      error: error.message,
    });
  }
};

export const updateShipment = async (req, res) => {
    try {
      const id = req.params.id;
      const { idDest, idRem } = req.body;
      if (isNaN(parseInt(idRem)) || isNaN(parseInt(idDest))) {
        return res
          .status(400)
          .json({ message: "Inserte Tipos de datos que sean validos" });
      } else {
        const existsIdDest = await userExists(idDest);
        const existsIdRem = await userExists(idRem);
        
        if (existsIdDest && existsIdRem) {
          const [result] = await pool.query(
            "UPDATE relacionesenvio SET remitente = ?, destinatario = ? WHERE id = ?",
            [parseInt(idRem), parseInt(idDest), id]
          );
          const [rows] = await pool.query(
            "SELECT * FROM relacionesenvio WHERE id = ?",                            
            id
          );
          res.status(200).json(rows);
        } else {
          return res
            .status(404)
            .json({ message: "No se ha encontrado el id del usuario" });
        }
      }
    } catch (error) {
      res.status(500).json({
        message: "Ocurrio un error al actualizar el envio",
        error: error.message,
      });
    }
  };
