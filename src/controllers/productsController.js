import products from "../models/Product.js";

export default class ProductsController {
    static listProduct = (req, res) => {
        products.find()
        .exec((err, products) => {
            if (err) console.log(err);
            if (products) res.status(200).json(products);
        });
    }

    static listProductById = (req, res) => {
        const id = req.params.id;

        products.findById(id)
        .populate('product', 'title')
        .exec((err, products) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - product id was not found` })
            } else {
                res.status(200).send(products);
            }
        })
    }

    static addProduct = (req, res) => {
        let product = new products(req.body);
        product.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - failed to add product.` });
            } else {
                res.status(201).send(product.toJSON());
            }
        });

    }

    static updateProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'The product was updated.' });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    }

    static deleteProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'product was successfully deleted' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static listProductByType = (req, res) => {
        const type = req.query.type;
        products.find({'type': type}, {}, (err, products) => {
            res.status(200).send(products);
        })

    }
}


