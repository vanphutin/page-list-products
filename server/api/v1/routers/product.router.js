const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

router.get("/", productController.index);
router.get("/:id", productController.getDetails);

module.exports = router;
