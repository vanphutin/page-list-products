const express = require("express");
const mysql = require("mysql");
const app = express();
require("dotenv").config();
const productRouter = require("./api/v1/routers/product.router");
const pool = require("./config/database"); // Adjust the path as necessary

app.use("/products", productRouter);

// Bắt đầu server
const PORT = process.env.PORT || 3000;

// Ensure the pool connection is established before starting the server
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");

  // Release the connection after use
  connection.release();

  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
