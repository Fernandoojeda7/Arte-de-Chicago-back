import { Router } from "express";
import MessageController from "../controllers/message.controller";

const messageRouter = Router();
const controller = new MessageController();

messageRouter.post("/", (req, res) => controller.create(req, res));

export default messageRouter;
