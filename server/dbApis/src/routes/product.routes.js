import { Router } from "express";
import { getProducts,deleteProduct,updateProduct,getSingleProduct,postProduct, getProductsByFilter } from "../controllers/product.controller.js";
const router = Router();

router.post('/product', postProduct);

router.get('/products', getProducts);

router.get('/product/:id', getSingleProduct);

router.delete('/product/:id', deleteProduct);

router.put('/product/:id', updateProduct);

router.get('/productsByInvoice', getProductsByFilter);





export default router;