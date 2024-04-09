import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const extraItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const itemSchema = new Schema({
    id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    extras: [extraItemSchema] 
   
});

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    restaurantId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    items: [itemSchema],
    totalPrice: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true,
        enum: ['pending', 'confirmed', 'complete', 'cancelled'],
        default: 'pending'
    }
}, {
    timestamps: true
});

const Order = model('Orders', orderSchema);

export default Order;
