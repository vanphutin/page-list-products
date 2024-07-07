const Product = require("../model/product.model");

module.exports.index = async (req, res) => {
  Product.getAll((err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    console.log(results); // Log dữ liệu vào terminal
    res.json(results);
  });
};
