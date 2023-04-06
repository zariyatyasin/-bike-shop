import express from "express"
import { createProduct, DeleteProduct, getAllProduct, getProduct, UpdateProduct } from "../Controller/productController.js";
import {  verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";
const router = express.Router();

router.post("/",verifyTokenAndAdmin,createProduct)
router.put("/:id",verifyTokenAndAdmin,UpdateProduct)
router.get("/:id",getProduct)
router.get("/", getAllProduct)
router.delete("/:id", DeleteProduct)

export default router