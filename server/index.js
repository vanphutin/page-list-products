const express = require("express");
const app = express();
require("dotenv").config();
const routerApiV1 = require("./api/v1/routers/index.router");
const pool = require("./config/database"); // Adjust the path as necessary

//router
routerApiV1(app);

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
