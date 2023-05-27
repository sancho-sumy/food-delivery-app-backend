import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger.utils';
import ItemModel from '../models/item.model';
import { createItem } from '../services/item.service';

export async function getItemsHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const items = await ItemModel.find();
        res.status(200).json({ message: 'Fetched items successfully.', result: items });
    } catch (error: any) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

export async function createItemHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const item = await createItem(req.body);
        logger.info('New item created');
        return res.send(item);
    } catch (error: any) {
        logger.error(error);
        error.statusCode = 409;
        next(error);
    }
}
