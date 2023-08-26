import usersServices from "../services/users.service";
import Exception from "../utils/Exception";
import CryptoJS from "crypto-js";
import { createTokenUsuario } from "../utils/jwt";

declare const process: {
  env: {
    CRYPTO_SECRET: string;
  };
};

class UsersHadlers {
  service = new usersServices();

  async login(email: string, password: string) {
    if (!email) {
      throw new Exception("El email es requerido");
    }

    if (!password) {
      throw new Exception("El password es requerido");
    }

    const userDB = await this.service.findByEmail(email);

    if (!userDB) {
      throw new Exception("Usuario no encontrado");
    }

    const decryptPassword = CryptoJS.AES.decrypt(
      userDB.password,
      process.env.CRYPTO_SECRET
    ).toString(CryptoJS.enc.Utf8);

    if (decryptPassword !== password) {
      throw new Exception("Contraseña incorrecta");
    }

    const token = createTokenUsuario(userDB);

    const { contrasenia: pwd, ...user } = userDB as any;

    return { user, token };
  }
}

export default UsersHadlers;
