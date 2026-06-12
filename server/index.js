import express from "express";
import { connectDB } from "./config/Connect.js";
import UserRouter from "./routers/UserRouter.js";
import productRouter from "./routers/ProductRouter.js";
import CartRouter from "./routers/CartRouter.js";
import authRouter from "./routers/AuthRouter.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.MONGODB_URL,
  }),
);

connectDB();

app.use("/user", UserRouter);
app.use("/product", productRouter);
app.use("/cart", CartRouter);
app.use("/auth", authRouter);

app.listen(9000, () => {
  console.log("server running 9000");
});

export default app;
