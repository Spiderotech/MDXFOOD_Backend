import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String 
    },
    google:{
        type:Boolean
    },
    fcmToken: {  
        type: String,
        required: false  
    }
});

const User= model('User', userSchema);

export default User;
