import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const controller = new AuthController();
const authRouter = Router();

authRouter.post("/login", (req, res) => controller.login(req, res));

export default authRouter;
