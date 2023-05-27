import { omit } from 'lodash';
import ShopModel, { ShopInput } from '../models/shop.model';

export async function createShop(input: ShopInput) {
    try {
        const shop = await ShopModel.create(input);
        return omit(shop.toJSON(), 'shop');
    } catch (error: any) {
        throw new Error(error);
    }
}
