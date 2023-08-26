"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artworkschicago_controller_1 = __importDefault(require("../controllers/artworkschicago.controller"));
const controller = new artworkschicago_controller_1.default();
const artWorksChicagoRouter = (0, express_1.Router)();
artWorksChicagoRouter.get("/art_works", (req, res) => controller.getArtWorks(req, res));
artWorksChicagoRouter.get("/search", (req, res) => controller.getSearch(req, res));
artWorksChicagoRouter.get("/page_mas", (req, res) => controller.getPageMas(req, res));
artWorksChicagoRouter.get("/page_menos", (req, res) => controller.getPageMenos(req, res));
artWorksChicagoRouter.get("/art_work/:id", (req, res) => controller.getArtwork(req, res));
exports.default = artWorksChicagoRouter;
