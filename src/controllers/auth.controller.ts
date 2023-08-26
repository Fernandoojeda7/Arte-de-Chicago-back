import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";
import AuthHandler from "../handlers/auth.handler";

class AuthController {
  handler = new AuthHandler();

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const { user, token } = await this.handler.login(email, password);

      return res.status(200).json({ user, token });
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}
export default AuthController;
