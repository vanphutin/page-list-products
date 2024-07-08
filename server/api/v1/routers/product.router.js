const express = require("express");
const router = express.Router();
const { v4: uid } = require("uuid");

const productController = require("../controller/product.controller");

router.get("/", productController.index);
router.post("/create", productController.createProduct);
router.get("/:id", productController.getDetails);

module.exports = router;
