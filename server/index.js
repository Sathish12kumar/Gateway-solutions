const express = require("express");
const { connectDB } = require("./config/Connect");
const UserRouter = require("./routers/UserRouter");
const productRouter = require("./routers/ProductRouter");
const CartRouter = require("./routers/CartRouter");
const authRouter = require("./routers/AuthRouter");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/user", UserRouter);
app.use("/product", productRouter);
app.use("/cart", CartRouter);
app.use("/auth", authRouter);

app.listen(9000, () => {
  console.log("server running 9000");
});
