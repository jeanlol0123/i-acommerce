import { Router } from "express";
import { getSingleWholeInvoice } from "../controllers/wholeInvoice.controller.js";
const router = Router();

router.get('/wholeInvoice/:idFactura', getSingleWholeInvoice);

export default router;