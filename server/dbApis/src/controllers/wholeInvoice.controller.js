import { pool } from "../databases/dbConnection.js";

export const getSingeleWholeInvoice = async (req, res) => {
    const idFactura = req.params.idFactura;
    try {
        const [rows] = await pool.query(
            `
            SELECT 
                f.id,
                f.fechaCreacion,
                f.fechaVencimiento,
                p1.nombre AS remitente_nombre,
                p1.apellido AS remitente_apellido,
                p1.direccion AS remitente_direccion,
                p1.telefono AS remitente_telefono,
                p1.correo AS remitente_correo,
                p1.ciudad AS remitente_ciudad,
                p2.nombre AS destinatario_nombre,
                p2.apellido AS destinatario_apellido,
                p2.direccion AS destinatario_direccion,
                p2.telefono AS destinatario_telefono,
                p2.correo AS destinatario_correo,
                p2.ciudad AS destinatario_ciudad,
                pp.idProducto,
                pr.nombre AS producto_nombre,
                pp.cantidad
            FROM 
                factura f
            INNER JOIN relacionesenvio re ON f.idRelacionesEnvio = re.id
            INNER JOIN persona p1 ON re.remitente = p1.id
            INNER JOIN persona p2 ON re.destinatario = p2.id
            INNER JOIN pedidoproducto pp ON f.id = pp.idFactura
            INNER JOIN producto pr ON pp.idProducto = pr.id
            WHERE
                f.id = ?;
            `,
            [idFactura]

        );
        console.log(rows);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se ha podido realizar la factura" });
        }
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "No existe la factura: ",error:error.message });
    }
}