import mongoose from "mongoose";
//import { IProduct } from "../interface/IProduct";

const productSchema = new mongoose.Schema({
    title: { String },
    price: { Number },
    description: { String },
    photos: { Array },
    type: { String },
    comments: { Array, },
    features: { Array,  }
})

const products = mongoose.model('product', productSchema);


export default products;
