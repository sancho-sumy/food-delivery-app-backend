import express from 'express';
import { createItemHandler, getItemsHandler } from '../controllers/item.controller';

const router = express.Router();

router.get('/', getItemsHandler);

router.post('/add', createItemHandler);

export default router;
