import express from "express";
import ProductsController from '../controllers/productsController.js';

const router = express.Router();

router
    .get("/products", ProductsController.listProduct)
    .post("/products/new", ProductsController.addProduct)
    .put("/products/:id", ProductsController.updateProduct)
    .delete("/products/:id", ProductsController.deleteProduct);

export default router;