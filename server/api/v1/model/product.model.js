const db = require("../../../config/database");

const Product = {
  getAll: (callback) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  },
  // Other methods like getProductById, createProduct, updateProduct, deleteProduct, etc.
};

module.exports = Product;
