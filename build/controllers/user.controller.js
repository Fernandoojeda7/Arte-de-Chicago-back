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
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const users_validator_1 = __importDefault(require("../handlers/users.validator"));
class UserController {
    constructor() {
        this.handler = new users_validator_1.default();
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield this.handler.getById(Number(id));
                return res.status(200).json(user);
            }
            catch (error) {
                return (0, errorHandler_1.default)(error, res);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, lastName, email, dni, password, phone } = req.body;
            try {
                const user = yield this.handler.create({
                    name,
                    lastName,
                    email,
                    dni,
                    password,
                    phone,
                });
                const { password: unused } = user, userWithOutPassword = __rest(user, ["password"]);
                return res.status(200).json(userWithOutPassword);
            }
            catch (error) {
                return (0, errorHandler_1.default)(error, res);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, lastName, email, dni, password, phone } = req.body;
            try {
                const userUpdated = yield this.handler.update(Number(id), {
                    name,
                    lastName,
                    email,
                    dni,
                    password,
                    phone,
                });
                const { password: unused } = userUpdated, userWithOutPassword = __rest(userUpdated, ["password"]);
                return res.status(200).json(userWithOutPassword);
            }
            catch (error) {
                return (0, errorHandler_1.default)(error, res);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const userDeleted = yield this.handler.delete(Number(id));
                return res.status(200).json(userDeleted);
            }
            catch (error) {
                return (0, errorHandler_1.default)(error, res);
            }
        });
    }
}
exports.default = UserController;
