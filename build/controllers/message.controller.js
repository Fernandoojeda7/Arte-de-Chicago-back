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
const message_handler_1 = __importDefault(require("../handlers/message.handler"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
class MessageController {
    constructor() {
        this.handler = new message_handler_1.default();
    }
    create(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, fullName, phone, message } = _req.body;
                const response = yield this.handler.create({
                    email,
                    fullName,
                    phone,
                    message,
                });
                res.status(200).json(response);
            }
            catch (err) {
                return (0, errorHandler_1.default)(err, res);
            }
        });
    }
}
exports.default = MessageController;
