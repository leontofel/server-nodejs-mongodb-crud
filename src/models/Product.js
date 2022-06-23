import mongoose from "mongoose";
//import { IProduct } from "../interface/IProduct";

const productSchema = new mongoose.Schema({
    _id: { String },
    title: { String },
    price: { Number },
    description: { String },
    photos: { Array },
    type: { String },
    comments: { Array, },
    features: { Array,  }
},
{
    strictPopulate: false
})

const products = mongoose.model('product', productSchema);


export default products;
