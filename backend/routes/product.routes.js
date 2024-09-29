import express from "express";

import { createProduct, deletProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", getProducts)
router.post("/",createProduct)
//put方法更新修改所有字段。patch方法只针对某些字段
router.put("/:id",updateProduct)

router.delete("/:id",deletProduct)


export default router;