"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config().parsed;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3001;
app.use((0, cors_1.default)());
app.use("/api", index_routes_1.default);
app.get("/", (_req, res) => {
    res.send("Ya corre el server");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} Version 0.0.1`);
});
