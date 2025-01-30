import express from "express"
import { createProductController, deleteProductController, getAllProductController } from "../controllers/productController.js"
const router=express.Router()
// create product
router.post("/create-product",createProductController)
// get all product
router.get("/getAll-products",getAllProductController)
// delete product
router.delete("/delete-product/:id",deleteProductController)
export default router