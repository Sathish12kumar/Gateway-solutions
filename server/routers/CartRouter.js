import express from "express";
import {
  getCart,
  addCart,
  updateCart,
  deleteCart,
} from "../controller/CartController.js";

const CartRouter = express.Router();

CartRouter.get("/:id", getCart);
CartRouter.post("/add", addCart);
CartRouter.put("/update", updateCart);
CartRouter.delete("/drop/:id", deleteCart);

export default CartRouter;
