import { Router } from "express";
import { getSingeleWholeInvoice } from "../controllers/wholeInvoice.controller.js";
const router = Router();

router.get('/wholeInvoice',getSingeleWholeInvoice);

export default router;