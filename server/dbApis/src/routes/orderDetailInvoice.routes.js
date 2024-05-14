import { Router } from "express";
import {getSingleOrderInvoice,updateOrderInvoice,deleteOrderInvoice,postOrderInvoice, getOrderInvoices} from "../controllers/OrderDetailInvoice.controller.js";
const router = Router();

router.post('/orderInvoice', postOrderInvoice);

router.get('/orderInvoices', getOrderInvoices);

router.get('/orderInvoice/:id', getSingleOrderInvoice);

router.delete('/orderInvoice/:id', deleteOrderInvoice);

router.put('/orderInvoice/:id', updateOrderInvoice);

export default router;