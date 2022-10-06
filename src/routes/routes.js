import Router from "express";
import levelRoutes from "./levelRoutes.js";

import userRoutes from "./userRoutes.js";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/levels", levelRoutes);

export default routes;
