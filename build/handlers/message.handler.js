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
const message_service_1 = __importDefault(require("../services/message.service"));
class MessageHandler {
    constructor() {
        this.service = new message_service_1.default();
    }
    create({ email, fullName, phone, message, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error("Email es requerido");
            }
            if (!fullName) {
                throw new Error("El Nombre y Apellido es requerido");
            }
            if (!phone) {
                throw new Error("El telefono es requerido");
            }
            if (!message) {
                throw new Error("El mensaje es requerido");
            }
            const mensaje = yield this.service.create({
                email,
                fullName,
                phone,
                message,
            });
            return mensaje;
        });
    }
}
exports.default = MessageHandler;
