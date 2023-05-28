import mongoose, { Document } from 'mongoose';

export interface ShopInput {
    name: string;
}

export interface ShopDocument extends ShopInput, Document {
    createdAt: Date;
    updatedAt: Date;
}

const shopSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const ShopModel = mongoose.model<ShopDocument>('Shop', shopSchema);

export default ShopModel;
