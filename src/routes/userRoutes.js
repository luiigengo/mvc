import Router from "express";
import UserController from "../controllers/UserController.js";

const userController = new UserController();

const userRoutes = Router();
userRoutes
  .get("/getUser", userController.getUser)
  .post("/createUser", userController.createUser);

export default userRoutes;
