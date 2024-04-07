import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    restaurantImage: {
        type: String 
    },
    fcmToken: {  
        type: String,
        required: false  
    }
});

const Restaurant = model('Restaurant', restaurantSchema);

export default Restaurant;
