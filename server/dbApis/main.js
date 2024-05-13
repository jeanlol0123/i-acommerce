import express from 'express';
import {PORT} from './config.js';
import userRoutes from './src/routes/person.routes.js';
import productRoutes from './src/routes/product.routes.js';
import shipmentRoutes from './src/routes/shipment.routes.js';
import invoiceRoutes from './src/routes/invoice.routes.js';
import orderDetailRoutes from './src/routes/orderDetail.routes.js';
import ping from './src/routes/ping.js';
const app = express();

app.use(express.json())
app.use(ping);
app.use('/api/',userRoutes);
app.use('/api/',productRoutes);
app.use('/api/',shipmentRoutes);
app.use('/api/',invoiceRoutes);
app.use('/api/',orderDetailRoutes);
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})