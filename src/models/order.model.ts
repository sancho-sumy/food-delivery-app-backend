import mongoose, { Document } from 'mongoose';

export interface OrderInput {
    info: {
        name: string;
        email: string;
        phone: string;
        address: string;
    };
    items: {
        item: ItemDocument['_id'];
        price: number;
        quantity: number;
        totalPrice: number;
    };
    orderPrice: number;
}

export interface ItemDocument extends OrderInput, Document {
    createdAt: Date;
    updatedAt: Date;
}

const orderSchema = new mongoose.Schema(
    {
        info: {
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
        },
        items: [
            {
                item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
                price: {
                    type: Number,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                totalPrice: {
                    type: Number,
                    required: true,
                },
            },
        ],
        orderPrice: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
);

const OrderModel = mongoose.model<ItemDocument>('Order', orderSchema);

export default OrderModel;
