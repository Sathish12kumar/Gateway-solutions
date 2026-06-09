import CartModel from "../models/CartModel.js";
import ProductModel from "../models/ProductModel.js";
import userModel from "../models/UserModel.js";
import mongoose from "mongoose";

export const getCart = async (req, res) => {
  const result = await CartModel.find({ user: req.params.id });
  res.send(result);
};

export const addCart = async (req, res) => {
  try {
    const totalAmount = req.body.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    const mod = new CartModel({
      ...req.body,
      totalAmount,
    });

    const result = await mod.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const carts = await CartModel.find({ user: userId });

    let foundItem = null;

    for (const cart of carts) {
      const item = cart.items.find((dt) => dt._id.toString() === productId);

      if (item) {
        item.quantity = quantity;
        foundItem = item;
        await cart.save();
        break;
      }
    }

    if (!foundItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ carts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.json("deleted!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
