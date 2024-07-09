const express = require("express");
const router = express.Router();
const { v4: uid } = require("uuid");

const productController = require("../controller/product.controller");

// CRUD APIs
router.get("/", productController.index);
router.post("/create", productController.createProduct);
router.delete("/delete/:id", productController.deleteProduct);
router.patch("/update/:id", productController.updateProduct);

//Other
router.get("/detail/:id", productController.getDetails);

module.exports = router;
