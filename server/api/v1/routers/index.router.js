const productRouter = require("../routers/product.router");

module.exports = (app) => {
  const version = "/api/v1";
  app.use(version + "/products", productRouter);
};
