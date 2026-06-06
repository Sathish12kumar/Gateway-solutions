const express = require("express");
const {
  getallproducts,
  addProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/ProductController");

const productRouter = express.Router();

productRouter.get("/", getallproducts);
productRouter.post("/add", addProducts);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/drop/:id", deleteProduct);

module.exports = productRouter;
