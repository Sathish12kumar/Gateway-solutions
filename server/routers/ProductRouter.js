const express = require("express");
const {
  getallproducts,
  addProducts,
  updateProduct,
  deleteProduct,
  getsinglepro,
} = require("../controller/ProductController");

const productRouter = express.Router();

productRouter.get("/", getallproducts);
productRouter.get("/:id", getsinglepro);
productRouter.post("/add", addProducts);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/drop/:id", deleteProduct);

module.exports = productRouter;
