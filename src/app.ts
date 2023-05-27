import config from 'config';
import cookieParser from 'cookie-parser';
import express, { Request, Response, NextFunction } from 'express';
import shopsRoutes from './routes/shops.routes';
import itemsRoutes from './routes/items.routes';
import ordersRoutes from './routes/orders.routes';

import logger from './utils/logger.utils';
import connect from './utils/connect.utils';

interface Error {
    statusCode: number;
    message: string;
    data: any;
}

const port = config.get<number>('server.port');

const app = express();

app.use(cookieParser());

app.use(express.json());

app.listen(port, async () => {
    logger.info(`App listening on http://localhost:${port}`);

    await connect();

    app.use('/api/shops', shopsRoutes);
    app.use('/api/items', itemsRoutes);
    app.use('/api/orders', ordersRoutes);

    app.get('/healthcheck', (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
        const status = error.statusCode || 500;
        const message = error.message;
        const data = error.data;
        res.status(status).json({ message: message, data: data });
    });
});
