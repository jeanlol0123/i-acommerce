import { Router } from "express";
import { getInvoices,postInvoice,getSingleInvoice,deleteInvoice,updateInvoice } from "../controllers/invoice.controller.js";
const router = Router();

router.post('/invoice', postInvoice);

router.get('/invoices', getInvoices);

router.get('/invoice/:id', getSingleInvoice);

router.delete('/invoice/:id', deleteInvoice);

router.put('/invoice/:id', updateInvoice);





export default router;