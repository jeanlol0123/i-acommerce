import { Router } from "express";
import {deleteOrder,postOrder,getSingleOrder,updateOrder, getOrders } from "../controllers/orderDetail.controller.js";
const router = Router();

router.post('/orderDetail', postOrder);

router.get('/orderDetails', getOrders);

router.get('/orderDetail/:id', getSingleOrder);

router.delete('/orderDetail/:id', deleteOrder);

router.put('/orderDetail/:id', updateOrder);





export default router;