const express = require("express");
const {
  getCart,
  addCart,
  updateCart,
  deleteCart,
} = require("../controller/CartController");

const CartRouter = express.Router();

CartRouter.get("/:id", getCart);
CartRouter.post("/add", addCart);
CartRouter.put("/update/:id", updateCart);
CartRouter.delete("/drop/:id", deleteCart);

module.exports = CartRouter;
