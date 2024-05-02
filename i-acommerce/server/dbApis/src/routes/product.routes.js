import { Router } from "express";
import { getProducts, postProduct,deleteProduct,getSingleProduct,updateProduct } from "../controllers/product.controller";
const router = Router();

router.post('/product', postProduct);

router.get('/products', getProducts);

router.post('/product/:id', getSingleProduct);

router.delete('/product', deleteProduct);

router.put('/product', updateProduct);





export default router;