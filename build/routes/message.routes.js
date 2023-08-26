"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_controller_1 = __importDefault(require("../controllers/message.controller"));
const messageRouter = (0, express_1.Router)();
const controller = new message_controller_1.default();
messageRouter.post("/", (req, res) => controller.create(req, res));
exports.default = messageRouter;
