const db = require("../../../config/database");
const { promisify } = require("util");

// Chuyển đổi db.query thành một hàm trả về Promise
const query = promisify(db.query).bind(db);

const Product = {
  // Các phương thức khác như lấy sản phẩm theo ID, tạo sản phẩm, cập nhật sản phẩm, xóa sản phẩm, vv.

  //[GET] /api/v1/products
  getAllProducts: async (sort) => {
    let sql = "SELECT * FROM products";

    // [GET] /api/v1/products?sort=asc || desc
    if (sort === "asc") {
      sql += " ORDER BY price ASC";
    } else if (sort === "desc") {
      sql += " ORDER BY price DESC";
    }
    try {
      const results = await query(sql);
      return results;
    } catch (err) {
      throw err;
    }
  },

  //[GET] /api/v1/products/:id
  getDetails: async (id) => {
    const sql_details = "SELECT * FROM products WHERE id=?";
    try {
      const results = await query(sql_details, [id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  //[POST] /api/v1/products/create
  createProduct: async (id, title, image, description, price) => {
    const sql_create =
      "INSERT INTO products (id, title, image, description, price) VALUES (?, ?, ?, ?, ?)";
    try {
      const results = await query(sql_create, [
        id,
        title,
        image,
        description,
        price,
      ]);
      return results;
    } catch (error) {
      throw error;
    }
  },
  deleteProduct: async (id) => {
    const sql_delete = "DELETE FROM products WHERE id=?";
    try {
      const results = await query(sql_delete, [id]);
      return results;
    } catch (error) {
      throw error;
    }
  },

  //[PATCH] /api/v1/products/update/:id
  updateProduct: async (id, title, image, description, price) => {
    const sql_update =
      "UPDATE products SET title=? ,image=? ,description=? ,price=?  WHERE id=?";

    try {
      const results = await query(sql_update, [
        title,
        image,
        description,
        price,
        id,
      ]);
      return results;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Product;
