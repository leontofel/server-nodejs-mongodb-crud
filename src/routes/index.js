import express from "express";
import products from "./productRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "Product app" });
    });
    app.use(
        express.json(),
        products
    )
}

export default routes;