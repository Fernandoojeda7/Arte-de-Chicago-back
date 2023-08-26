import { Router } from "express";
import artWorksChicagoRouter from "./artworkschicago.routes";
import authRouter from "./auth.routes";
import userRouter from "./users.routes";
import messageRouter from "./message.routes";

const router = Router();

router.use("/art_api", artWorksChicagoRouter);
router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/message", messageRouter);

export default router;
