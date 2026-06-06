import ProductModel from "../models/ProductModel.js";

export const getallproducts = async (req, res) => {
  try {
    const result = await ProductModel.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProducts = async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const result = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id, req.body);
    res.send("deleted sucessfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
