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

const foodSchema = new Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    preparationTime: {
        type: String
    },
    extraItems: [extraItemSchema]
});

const Food = model('Food', foodSchema);

export default Food;
