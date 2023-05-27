import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger.utils';
import { createShop } from '../services/shop.service';
import ShopModel from '../models/shop.model';

export async function getShopsHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const shops = await ShopModel.find();
        res.status(200).json({ message: 'Fetched shops successfully.', result: shops });
    } catch (error: any) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

export async function createShopHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const shop = await createShop(req.body);
        logger.info('New shop created');
        return res.send(shop);
    } catch (error: any) {
        logger.error(error);
        error.statusCode = 409;
        next(error);
    }
}
