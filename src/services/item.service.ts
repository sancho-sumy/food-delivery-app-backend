import { omit } from 'lodash';
import ItemModel, { ItemInput } from '../models/item.model';

export async function createItem(input: ItemInput) {
    try {
        const item = await ItemModel.create(input);
        return omit(item.toJSON(), 'item');
    } catch (error: any) {
        throw new Error(error);
    }
}
