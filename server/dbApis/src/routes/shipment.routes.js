import { Router } from "express";
import { getShipments,postShipment,getSingleShipment,updateShipment,deleteShipment } from "../controllers/shipment.controller.js";
const router = Router();

router.post('/shipment', postShipment);

router.get('/shipments', getShipments);

router.get('/shipment/:id', getSingleShipment);

router.delete('/shipment/:id', deleteShipment);

router.put('/shipment/:id', updateShipment);


export default router;