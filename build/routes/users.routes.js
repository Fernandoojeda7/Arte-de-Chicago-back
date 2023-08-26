"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../utils/jwt");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userRouter = (0, express_1.Router)();
const controller = new user_controller_1.default();
userRouter.get("/:id", (req, res) => controller.getById(req, res));
userRouter.post("/", (req, res) => controller.create(req, res));
userRouter.put("/:id", jwt_1.validateTokenUsuario, (req, res) => controller.update(req, res));
userRouter.delete("/:id", jwt_1.validateTokenUsuario, (req, res) => controller.delete(req, res));
exports.default = userRouter;
