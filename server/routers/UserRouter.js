import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/", getUsers);
UserRouter.post("/add", createUser);
UserRouter.put("/update/:id", updateUser);
UserRouter.delete("/drop/:id", deleteUser);

export default UserRouter;
