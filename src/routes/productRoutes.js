import express from "express";
import ProductsController from '../controllers/productsController.js';

const router = express.Router();

router
    .get("/products", ProductsController.listProduct)
    .get("/products/search/type", ProductsController.listProductByType)
    .get("/products/search/", ProductsController.listProductBySearch)
    .get("/products/4", ProductsController.getProductMediumCard)
    .get("/products/1", ProductsController.getProductSingleCard)
    .get("/product/:id", ProductsController.listProductById)
    .post("/products", ProductsController.addProduct)
    .put("/products/:id", ProductsController.updateProduct)
    .delete("/products/:id", ProductsController.deleteProduct);

export default router;