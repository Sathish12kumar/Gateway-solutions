import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
      country: String,
    },
  },
  {
    timestamps: true,
  },
);
const userModel = mongoose.model("Users", userSchema);

export default userModel;
