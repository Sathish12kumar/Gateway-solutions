const express = require("express");
const { connectDB } = require("./config/Connect");
const UserRouter = require("./routers/UserRouter");
const productRouter = require("./routers/ProductRouter");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.use("/user", UserRouter);
app.use("/product", productRouter);

app.listen(9000, () => {
  console.log("server running 9000");
});
