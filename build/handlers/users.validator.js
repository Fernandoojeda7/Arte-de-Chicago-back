"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = __importDefault(require("crypto-js"));
const users_service_1 = __importDefault(require("../services/users.service"));
const Exception_1 = __importDefault(require("../utils/Exception"));
class UsersHandler {
    constructor() {
        this.service = new users_service_1.default();
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Exception_1.default("El id de usuario es requerido");
            }
            const userDB = yield this.service.findById(id);
            if (!userDB) {
                throw new Exception_1.default("Usuario no encontrado");
            }
            return userDB;
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Exception_1.default("El email es requerido");
            }
            const userDB = yield this.service.findByEmail(email);
            if (!userDB) {
                throw new Exception_1.default("Email no encontrado");
            }
            return userDB;
        });
    }
    create({ name, lastName, email, dni, password, phone, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name) {
                throw new Exception_1.default("El nombre es requerido");
            }
            if (!lastName) {
                throw new Exception_1.default("El apellido es requerido");
            }
            if (!dni) {
                throw new Exception_1.default("El DNI es requerido");
            }
            if (!password) {
                throw new Exception_1.default("El password es requerido");
            }
            if (!email) {
                throw new Exception_1.default("El email es requerido");
            }
            if (!phone) {
                throw new Exception_1.default("El telefono es requerido");
            }
            const emailExists = yield this.service.emailOrDniAlreadyExists({
                email,
                dni,
            });
            if (emailExists)
                throw new Exception_1.default("El email o dni ya existen");
            const encryptPassword = crypto_js_1.default.AES.encrypt(password, process.env.CRYPTO_SECRET).toString();
            const user = yield this.service.create({
                name,
                lastName,
                email,
                dni,
                password: encryptPassword,
                phone,
            });
            return user;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Exception_1.default("El id de usuario es requerido");
            }
            if (!data) {
                throw new Exception_1.default("Los datos son requeridos");
            }
            const user = yield this.service.findById(id);
            if (!user) {
                throw new Exception_1.default("Usuario no encontrado");
            }
            const userUpdated = yield this.service.update(id, data);
            return userUpdated;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Exception_1.default("El id de usuario es requerido");
            }
            const user = yield this.service.findById(id);
            if (!user) {
                throw new Exception_1.default("Usuario no encontrado");
            }
            const userDelete = yield this.service.delete(id);
            return userDelete;
        });
    }
}
exports.default = UsersHandler;
