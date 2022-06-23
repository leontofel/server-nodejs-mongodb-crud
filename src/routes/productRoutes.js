import express from "express";
import ProductsController from '../controllers/productsController.js';

const router = express.Router();

router
    .get("/products", ProductsController.listProduct)
    .get("/products/search", ProductsController.listProductByType)
    .get("/products/:id", ProductsController.listProductById)
    .post("/products", ProductsController.addProduct)
    .put("/products/:id", ProductsController.updateProduct)
    .delete("/products/:id", ProductsController.deleteProduct);

export default router;