const express = require("express");
const { connectDB } = require("./config/Connect");
const UserRouter = require("./routers/UserRouter");
require("dotenv").config();

const app = express();

connectDB();

app.use("/user", UserRouter);

app.listen(9000, () => {
  console.log("server running 9000");
});
