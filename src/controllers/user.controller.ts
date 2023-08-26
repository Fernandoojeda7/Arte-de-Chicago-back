import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";
import UsersHandler from "../handlers/users.validator";

class UserController {
  handler = new UsersHandler();

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.handler.getById(Number(id));
      return res.status(200).json(user);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async create(req: Request, res: Response) {
    const { name, lastName, email, dni, password, phone } = req.body;
    try {
      const user = await this.handler.create({
        name,
        lastName,
        email,
        dni,
        password,
        phone,
      });
      const { password: unused, ...userWithOutPassword } = user;
      return res.status(200).json(userWithOutPassword);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, lastName, email, dni, password, phone } = req.body;
    try {
      const userUpdated = await this.handler.update(Number(id), {
        name,
        lastName,
        email,
        dni,
        password,
        phone,
      });
      const { password: unused, ...userWithOutPassword } = userUpdated;
      return res.status(200).json(userWithOutPassword);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userDeleted = await this.handler.delete(Number(id));
      return res.status(200).json(userDeleted);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}

export default UserController;
