import express from 'express';
import { createShopHandler, getShopsHandler } from '../controllers/shop.controller';

const router = express.Router();

router.get('/', getShopsHandler);

router.post('/add', createShopHandler);

export default router;
