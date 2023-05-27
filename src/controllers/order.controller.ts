import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger.utils';
import OrderModel from '../models/order.model';
import { createOrder } from '../services/order.service';

export async function getOrdersHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const order = await OrderModel.find();
        res.status(200).json({ message: 'Fetched order successfully.', order: order });
    } catch (error: any) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

export async function createOrderHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const order = await createOrder(req.body);
        logger.info('New order created');
        return res.send(order);
    } catch (error: any) {
        logger.error(error);
        error.statusCode = 409;
        next(error);
    }
}
