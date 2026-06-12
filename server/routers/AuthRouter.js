import express from "express";
import { RegisterUser } from "../controller/AuthController.js";

const authRouter = express.Router();

authRouter.post("/register", RegisterUser);

export default authRouter;
