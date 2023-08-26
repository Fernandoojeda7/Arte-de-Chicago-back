"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artworkschicago_routes_1 = __importDefault(require("./artworkschicago.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const message_routes_1 = __importDefault(require("./message.routes"));
const router = (0, express_1.Router)();
router.use("/art_api", artworkschicago_routes_1.default);
router.use("/auth", auth_routes_1.default);
router.use("/users", users_routes_1.default);
router.use("/message", message_routes_1.default);
exports.default = router;
