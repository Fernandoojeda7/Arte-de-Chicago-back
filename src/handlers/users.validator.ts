import { User } from "@prisma/client";
import CryptoJS from "crypto-js";
import UsersService from "../services/users.service";
import Exception from "../utils/Exception";

declare const process: {
  env: {
    CRYPTO_SECRET: string;
  };
};

class UsersHandler {
  service = new UsersService();
  async getById(id: number) {
    if (!id) {
      throw new Exception("El id de usuario es requerido");
    }

    const userDB = await this.service.findById(id);

    if (!userDB) {
      throw new Exception("Usuario no encontrado");
    }

    return userDB;
  }

  async getByEmail(email: string) {
    if (!email) {
      throw new Exception("El email es requerido");
    }
    const userDB = await this.service.findByEmail(email);

    if (!userDB) {
      throw new Exception("Email no encontrado");
    }

    return userDB;
  }

  async create({
    name,
    lastName,
    email,
    dni,
    password,
    phone,
  }: {
    name: string;
    lastName: string;
    email: string;
    dni: string;
    password: string;
    phone: string;
  }) {
    if (!name) {
      throw new Exception("El nombre es requerido");
    }

    if (!lastName) {
      throw new Exception("El apellido es requerido");
    }

    if (!dni) {
      throw new Exception("El DNI es requerido");
    }

    if (!password) {
      throw new Exception("El password es requerido");
    }

    if (!email) {
      throw new Exception("El email es requerido");
    }

    if (!phone) {
      throw new Exception("El telefono es requerido");
    }

    const emailExists = await this.service.emailOrDniAlreadyExists({
      email,
      dni,
    });
    if (emailExists) throw new Exception("El email o dni ya existen");

    const encryptPassword = CryptoJS.AES.encrypt(
      password,
      process.env.CRYPTO_SECRET
    ).toString();

    const user = await this.service.create({
      name,
      lastName,
      email,
      dni,
      password: encryptPassword,
      phone,
    });

    return user;
  }

  async update(id: number, data: Partial<User>) {
    if (!id) {
      throw new Exception("El id de usuario es requerido");
    }

    if (!data) {
      throw new Exception("Los datos son requeridos");
    }

    const user = await this.service.findById(id);

    if (!user) {
      throw new Exception("Usuario no encontrado");
    }

    const userUpdated = await this.service.update(id, data);

    return userUpdated;
  }

  async delete(id: number) {
    if (!id) {
      throw new Exception("El id de usuario es requerido");
    }
    const user = await this.service.findById(id);
    if (!user) {
      throw new Exception("Usuario no encontrado");
    }
    const userDelete = await this.service.delete(id);
    return userDelete;
  }
}

export default UsersHandler;
