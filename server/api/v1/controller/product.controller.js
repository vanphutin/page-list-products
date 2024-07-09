const Product = require("../model/product.model");
// import { v4 as uuidv4 } from "uuid";
const { v4: uid } = require("uuid");

module.exports.index = async (req, res) => {
  const sort = req.query.sort; // Lấy tham số sort từ query string, mặc định là 'asc'
  try {
    const products = await Product.getAllProducts(sort);
    // console.log(products); // Log dữ liệu vào terminal
    res.json({
      code: 200,
      message: "get all products",
      products,
    }); // Trả về kết quả dưới dạng JSON
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getDetails = async (req, res) => {
  try {
    const productDetails = await Product.getDetails(req.params?.id);

    if (!productDetails) {
      return res.status(404).json({
        code: 404,
        message: "Product not found",
      });
    }

    res.status(200).json({
      code: 200,
      message: "Get product success",
      data: {
        product: productDetails,
      },
    });
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    const id = uid(); // Generate a unique ID
    const { title, image, description, price } = req.body;
    console.log("req.body", req.body); // Log the request body

    if (!title || !image || !description || !price) {
      return res.status(400).json({
        code: 400,
        message: "All fields are required",
      });
    }

    const addProduct = await Product.createProduct(
      id,
      title,
      image,
      description,
      price
    );

    res.status(200).json({
      code: 200,
      message: "Create product success",
      product: addProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const productDelete = await Product.deleteProduct(req.params?.id);

    if (!productDelete) {
      return res.status(404).json({
        code: 404,
        message: "Product not found",
      });
    }

    res.status(200).json({
      code: 200,
      message: "Delete product success",
      data: {
        product: productDelete,
      },
    });
  } catch (error) {
    console.error("Error delete product:", error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const { title, image, description, price } = req.body;
    if (!title || !image || !description || !price) {
      return res.status(400).json({
        code: 400,
        message: "All fields are required",
      });
    }
    const productUpdate = await Product.updateProduct(
      req.params?.id,
      title,
      image,
      description,
      price
    );

    if (!productUpdate) {
      return res.status(400).json({
        code: 404,
        message: "Product not found",
      });
    }

    res.status(200).json({
      code: 200,
      message: "Update product success",
      data: {
        product: productUpdate,
      },
    });
  } catch (error) {
    console.error("Error delete product:", error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
