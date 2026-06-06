import userModel from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const result = await userModel.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
