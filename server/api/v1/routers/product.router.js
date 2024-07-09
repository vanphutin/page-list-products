const express = require("express");
const router = express.Router();
const { v4: uid } = require("uuid");

const productController = require("../controller/product.controller");

router.get("/", productController.index);
router.get("/detail/:id", productController.getDetails);
router.post("/create", productController.createProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
