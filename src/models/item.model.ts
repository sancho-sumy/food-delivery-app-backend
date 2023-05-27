import mongoose, { Document } from 'mongoose';
import { ShopDocument } from './shop.model';

export interface ItemInput {
    name: string;
    price: number;
    imageURL: string;
    shop: ShopDocument['_id'];
}

export interface ItemDocument extends ItemInput, Document {
    createdAt: Date;
    updatedAt: Date;
}

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        imageURL: {
            type: String,
            required: true,
        },
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
    },
    { timestamps: true },
);

const ItemModel = mongoose.model<ItemDocument>('Item', itemSchema);

export default ItemModel;
