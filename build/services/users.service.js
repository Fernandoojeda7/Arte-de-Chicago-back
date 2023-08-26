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
const db_1 = __importDefault(require("../config/db"));
const Exception_1 = __importDefault(require("../utils/Exception"));
const regex = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    onlyLetters: /^[a-zA-Z]+$/,
    onlyNumbers: /^[0-9]+$/,
};
class UsersService {
    findById(id) {
        return db_1.default.user.findUnique({
            where: {
                id,
            },
        });
    }
    findByEmail(email) {
        return db_1.default.user.findUnique({
            where: { email },
        });
    }
    create({ name, lastName, email, dni, password, phone, }) {
        if (!regex.email.test(email))
            throw new Exception_1.default("El email no es valido");
        if (!regex.onlyNumbers.test(dni) && dni.length !== 8)
            throw new Exception_1.default("DNI no es valido");
        return db_1.default.user.create({
            data: {
                name,
                lastName,
                email,
                dni,
                password,
                phone,
            },
        });
    }
    update(id, data) {
        return db_1.default.user.update({
            where: {
                id,
            },
            data: data,
        });
    }
    delete(id) {
        return db_1.default.user.delete({
            where: {
                id,
            },
        });
    }
    emailOrDniAlreadyExists({ email, dni, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.default.user.findFirst({
                where: {
                    OR: [
                        {
                            email,
                        },
                        {
                            dni,
                        },
                    ],
                },
            });
            return user ? true : false;
        });
    }
}
exports.default = UsersService;
