const express = require("express");
const { getUsers } = require("../controller/UserController");

const UserRouter = express.Router();

UserRouter.get("/", getUsers);

module.exports = UserRouter;
