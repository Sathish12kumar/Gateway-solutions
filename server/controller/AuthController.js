import userModel from "../models/UserModel.js";

export const RegisterUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const username = await userModel.findOne({ email: email });

    if (password == username.password) {
      res.status(200).send({ msg: "success", user: username });
    } else {
      res.json("incorrect password");
    }
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
