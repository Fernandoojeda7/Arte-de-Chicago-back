"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = __importDefault(require("./Exception"));
const registroError_1 = require("./registroError");
function errorHandler(error, res, logout = false) {
    (0, registroError_1.logsError)(error);
    console.log(error);
    if (error instanceof Exception_1.default) {
        return res.status(400).json({ message: error.message, logout });
    }
    if (error instanceof Error) {
        return res.status(500).json({ message: error.message, logout });
    }
    return res.status(500).json(error);
}
exports.default = errorHandler;
