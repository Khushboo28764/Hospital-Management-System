import mongoose from 'mongoose';
import validator from "validator";

const messageSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name Must Contains At Least 3 Characters!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name Must Contains At Least 3 Characters!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please Provide A Valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone Number Must Contains Exact 10 Digits!"],
        maxLength:[10,"Phone Number Must Contains Exact 10 Digits!"],
    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Message Must Contains At least 10 Characters!"],
        
    }

})
export const Message=mongoose.model("Message",messageSchema)