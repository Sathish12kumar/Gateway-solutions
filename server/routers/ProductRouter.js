import express from "express";
import {
  getallproducts,
  addProducts,
  updateProduct,
  deleteProduct,
  getsinglepro,
} from "../controller/ProductController.js";
const productRouter = express.Router();

productRouter.get("/", getallproducts);
productRouter.get("/:id", getsinglepro);
productRouter.post("/add", addProducts);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/drop/:id", deleteProduct);

export default productRouter;
