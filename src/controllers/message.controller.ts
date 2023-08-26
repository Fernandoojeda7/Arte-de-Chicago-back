import MessageHandler from "../handlers/message.handler";
import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";

class MessageController {
  handler = new MessageHandler();
  async create(_req: Request, res: Response) {
    try {
      const { email, fullName, phone, message } = _req.body;
      const response = await this.handler.create({
        email,
        fullName,
        phone,
        message,
      });
      res.status(200).json(response);
    } catch (err) {
      return errorHandler(err, res);
    }
  }
}

export default MessageController;
