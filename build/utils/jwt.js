"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTokenUsuario = exports.createTokenUsuario = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const errorHandler_1 = __importDefault(require("./errorHandler"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config().parsed;
const createTokenUsuario = ({ email }) => {
    const accessToken = (0, jsonwebtoken_1.sign)({ email }, process.env.JWT_SECRET_USUARIO, {
        expiresIn: "2h",
    });
    return accessToken;
};
exports.createTokenUsuario = createTokenUsuario;
const validateTokenUsuario = (req, res, next) => {
    const accessTokenUsuario = req.headers.authorization;
    if (accessTokenUsuario) {
        try {
            const validToken = (0, jsonwebtoken_1.verify)(accessTokenUsuario, process.env.JWT_SECRET_USUARIO);
            if (validToken) {
                return next();
            }
            return (0, errorHandler_1.default)(new Error("Token invalido"), res, true);
        }
        catch (error) {
            return res.status(401).json({ error });
        }
    }
    else {
        return (0, errorHandler_1.default)(new Error("Usuario no autenticado"), res, true);
    }
};
exports.validateTokenUsuario = validateTokenUsuario;
