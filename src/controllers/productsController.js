import products from "../models/Product.js";
import mongoose from "mongoose";

export default class ProductsController {
    static listProduct = (req, res) => {
        products.find()
            .populate()
            .exec((err, products) => {
                if (err) console.log(err);
                if (products) res.status(200).json(products);
            });
    }

    static addProduct = (req, res) => {
        let product = {
            _id: mongoose.Types.ObjectId(),
            codigo: req.body.codigo,
            descricao: req.body.descricao,
            preco: req.body.preco,
            data_cadastro: req.body.data_cadastro
        }

        products.create({
            _id: mongoose.Types.ObjectId(),
            codigo: req.body.codigo,
            descricao: req.body.descricao,
            preco: req.body.preco,
            data_cadastro: req.body.data_cadastro
        }, function (err) {
            if (err) {
                res.status(500).send({ message: `${err.message} - failed to add product.` });
            } else {
                res.status(201).send(product);
            }
        })
        


    }

    static updateProduct = (req, res) => {
        const id = req.params.id;

        products.find({ "_id": mongoose.Types.ObjectId(id) })
            .updateOne({ $set: req.body })
            .exec((err) => {
                if (!err) {
                    res.status(200).send({ message: 'The product was updated.' });
                } else {
                    res.status(500).send({ message: err.message });
                }
            });
    }

    static deleteProduct = (req, res) => {
        const id = req.params.id;

        products.find({ "_id": mongoose.Types.ObjectId(id) })
            .deleteOne()
            .exec((err) => {
                if (!err) {
                    res.status(200).send({ message: 'product was successfully deleted' })
                } else {
                    res.status(500).send({ message: err.message })
                }
            })
    }

}


