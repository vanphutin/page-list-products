require("dotenv").config();
const mysql = require("mysql");

// Thiết lập kết nối đến cơ sở dữ liệu
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust as necessary
  host: "localhost",
  port: process.env.PORT_DB, // Sử dụng cổng 3307
  user: process.env.USER_DB,
  password: "",
  database: process.env.DATABASE_DB,
});

module.exports = pool;
