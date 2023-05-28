import express from 'express';
import { createOrderHandler, getOrdersHandler } from '../controllers/order.controller';

const router = express.Router();

router.get('/', getOrdersHandler);

router.post('/add', createOrderHandler);

export default router;
