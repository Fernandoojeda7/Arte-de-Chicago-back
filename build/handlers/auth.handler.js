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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("../services/users.service"));
const Exception_1 = __importDefault(require("../utils/Exception"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const jwt_1 = require("../utils/jwt");
class UsersHadlers {
    constructor() {
        this.service = new users_service_1.default();
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Exception_1.default("El email es requerido");
            }
            if (!password) {
                throw new Exception_1.default("El password es requerido");
            }
            const userDB = yield this.service.findByEmail(email);
            if (!userDB) {
                throw new Exception_1.default("Usuario no encontrado");
            }
            const decryptPassword = crypto_js_1.default.AES.decrypt(userDB.password, process.env.CRYPTO_SECRET).toString(crypto_js_1.default.enc.Utf8);
            if (decryptPassword !== password) {
                throw new Exception_1.default("Contraseña incorrecta");
            }
            const token = (0, jwt_1.createTokenUsuario)(userDB);
            const _a = userDB, { contrasenia: pwd } = _a, user = __rest(_a, ["contrasenia"]);
            return { user, token };
        });
    }
}
exports.default = UsersHadlers;
