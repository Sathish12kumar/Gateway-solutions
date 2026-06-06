const mongoose = require("mongoose");

const products = {
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 1,
  },
};
const cartschema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  items: [products],
});

const CartModel = mongoose.model("Cart", cartschema);

module.exports = CartModel;
