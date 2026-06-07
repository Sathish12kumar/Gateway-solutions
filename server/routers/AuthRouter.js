const express = require("express");
const { RegisterUser } = require("../controller/AuthController");

const authRouter = express.Router();

authRouter.post("/register", RegisterUser);

module.exports = authRouter;
