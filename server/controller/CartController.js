import CartModel from "../models/CartModel.js";
import ProductModel from "../models/ProductModel.js";
import userModel from "../models/UserModel.js";

export const getCart = async (req, res) => {
  const result = await CartModel.find();
  res.send(result);
};

export const addCart = async (req, res) => {
  try {
    const mod = new CartModel(req.body);
    const result = await mod.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const result = await CartModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(result);
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
