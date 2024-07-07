const Product = require("../model/product.model");

module.exports.index = async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    console.log(products); // Log dữ liệu vào terminal
    res.json(products); // Trả về kết quả dưới dạng JSON
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
