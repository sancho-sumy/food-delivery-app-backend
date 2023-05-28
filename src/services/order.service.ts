import { omit } from 'lodash';
import OrderModel, { OrderInput } from '../models/order.model';

export async function createOrder(input: OrderInput) {
    try {
        const order = await OrderModel.create(input);
        return omit(order.toJSON(), 'result');
    } catch (error: any) {
        throw new Error(error);
    }
}
