import userModel from "../models/UserModel.js";

export const RegisterUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const username = await userModel.findOne({ email: email });

    if (password == username.password) {
      res.json("Password matched");
    } else {
      res.json("incorrect password");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
