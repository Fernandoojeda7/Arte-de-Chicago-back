"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
class MessageService {
    create({ email, fullName, phone, message, }) {
        return db_1.default.message.create({
            data: {
                email,
                fullName,
                phone,
                message,
            },
        });
    }
}
exports.default = MessageService;
