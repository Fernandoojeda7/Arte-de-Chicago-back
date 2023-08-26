import { Router } from "express";

import { validateTokenUsuario } from "../utils/jwt";
import UserController from "../controllers/user.controller";

const userRouter = Router();
const controller = new UserController();

userRouter.get("/:id", (req, res) => controller.getById(req, res));
userRouter.post("/", (req, res) => controller.create(req, res));
userRouter.put("/:id", validateTokenUsuario, (req, res) =>
  controller.update(req, res)
);
userRouter.delete("/:id", validateTokenUsuario, (req, res) =>
  controller.delete(req, res)
);

export default userRouter;
