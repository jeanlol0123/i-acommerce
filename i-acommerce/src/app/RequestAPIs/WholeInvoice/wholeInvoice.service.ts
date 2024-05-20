import axios from 'axios';

export async function getWholeInvoice(factura: string): Promise<WholeInvoice[]> {
    try {
        const response = await axios.get(`http://localhost:3000/api/wholeInvoice/${factura}`);
        
        if (response.data && Array.isArray(response.data)) {
            const dataArray = response.data;

            const invoices: WholeInvoice[] = dataArray.map(data => ({
                id: data.id,
                fechaCreacion: data.fechaCreacion,
                fechaVencimiento: data.fechaVencimiento,
                remitente: {
                    nombre: data.remitente_nombre,
                    apellido: data.remitente_apellido,
                    direccion: data.remitente_direccion,
                    telefono: data.remitente_telefono,
                    correo: data.remitente_correo,
                    ciudad: data.remitente_ciudad
                },
                destinatario: {
                    nombre: data.destinatario_nombre,
                    apellido: data.destinatario_apellido,
                    direccion: data.destinatario_direccion,
                    telefono: data.destinatario_telefono,
                    correo: data.destinatario_correo,
                    ciudad: data.destinatario_ciudad
                },
                producto: {
                    idProducto: data.idProducto,
                    producto_nombre: data.producto_nombre,
                    cantidad: data.cantidad
                }
            }));

            console.log('Mapped invoices:', invoices);
            return invoices;
        } else {
            throw new Error("No se ha encontrado la factura");
        }
    } catch (err) {
        console.error('Error fetching the invoice:', err);
        throw err;
    }
}

export interface Usuario {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    correo: string;
    ciudad: string;
}

export interface Producto {
    idProducto: number;
    producto_nombre: string;
    cantidad: number;
}

export interface WholeInvoice {
    id: string;
    fechaCreacion: string;
    fechaVencimiento: string;
    remitente: Usuario;
    destinatario: Usuario;
    producto: Producto;
}