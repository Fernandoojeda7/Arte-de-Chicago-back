import { NextFunction, Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import errorHandler from "./errorHandler";
import dotenv from "dotenv";
dotenv.config().parsed;
declare const process: {
  env: {
    JWT_SECRET_USUARIO: string;
  };
};

export const createTokenUsuario = ({ email }: { email: string }): string => {
  const accessToken = sign({ email }, process.env.JWT_SECRET_USUARIO, {
    expiresIn: "2h",
  });
  return accessToken;
};

export const validateTokenUsuario = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessTokenUsuario = req.headers.authorization;

  if (accessTokenUsuario) {
    try {
      const validToken = verify(
        accessTokenUsuario,
        process.env.JWT_SECRET_USUARIO
      );
      if (validToken) {
        return next();
      }
      return errorHandler(new Error("Token invalido"), res, true);
    } catch (error) {
      return res.status(401).json({ error });
    }
  } else {
    return errorHandler(new Error("Usuario no autenticado"), res, true);
  }
};
