const Product = require("../model/product.model");

module.exports.index = async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    console.log(products); // Log dữ liệu vào terminal
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
