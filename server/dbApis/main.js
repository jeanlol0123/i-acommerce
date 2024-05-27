import express from 'express';
import {PORT} from './config.js';
import cors from 'cors';
import userRoutes from './src/routes/person.routes.js';
import productRoutes from './src/routes/product.routes.js';
import shipmentRoutes from './src/routes/shipment.routes.js';
import invoiceRoutes from './src/routes/invoice.routes.js';
import orderDetailRoutes from './src/routes/orderDetail.routes.js';
import wholeInvoiceRoute from './src/routes/getWholeInvoice.routes.js';
import ping from './src/routes/ping.js';
const app = express();

app.use(cors({
    origin: 'https://gradually-aware-scorpion.ngrok-free.app'
}));
  

app.use(express.json())
app.use(ping);
app.use('/api/',userRoutes);
app.use('/api/',productRoutes);
app.use('/api/',shipmentRoutes);
app.use('/api/',invoiceRoutes);
app.use('/api/',orderDetailRoutes);
app.use('/api',wholeInvoiceRoute)



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})