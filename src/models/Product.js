import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    codigo:  Number ,
    descricao:  String ,
    preco:  Number ,
    data_cadastro:  Date ,
},
{
    strictPopulate: false
})

const products = mongoose.model('Product', productSchema);


export default products;
