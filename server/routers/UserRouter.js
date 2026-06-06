const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/UserController");

const UserRouter = express.Router();

UserRouter.get("/", getUsers);
UserRouter.post("/add", createUser);
UserRouter.put("/update/:id", updateUser);
UserRouter.delete("/drop/:id", deleteUser);

module.exports = UserRouter;
