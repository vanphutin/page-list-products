const db = require("../../../config/database");
const { promisify } = require("util");

// Chuyển đổi db.query thành một hàm trả về Promise
const query = promisify(db.query).bind(db);

const Product = {
  getAllProducts: async () => {
    const sql = "SELECT * FROM products";
    try {
      const results = await query(sql);
      return results;
    } catch (err) {
      throw err;
    }
  },

  // Các phương thức khác như lấy sản phẩm theo ID, tạo sản phẩm, cập nhật sản phẩm, xóa sản phẩm, vv.
};

module.exports = Product;
