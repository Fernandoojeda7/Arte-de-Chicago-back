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
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const artworkschicago_handler_1 = __importDefault(require("../handlers/artworkschicago.handler"));
class ArtWorksChicagoController {
    constructor() {
        this.handler = new artworkschicago_handler_1.default();
    }
    getArtWorks(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.handler.getArtWorks();
                res.status(200).json(response);
            }
            catch (error) {
                (0, errorHandler_1.default)(error, res);
            }
        });
    }
    getSearch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.handler.getSearch(req.query.busqueda);
                res.status(200).json(response);
            }
            catch (error) {
                (0, errorHandler_1.default)(error, res);
            }
        });
    }
    getPageMas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.handler.getPageMas(parseInt(req.query.pagina));
                res.status(200).json(response);
            }
            catch (error) {
                (0, errorHandler_1.default)(error, res);
            }
        });
    }
    getPageMenos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.handler.getPageMenos(parseInt(req.query.pagina));
                res.status(200).json(response);
            }
            catch (error) {
                (0, errorHandler_1.default)(error, res);
            }
        });
    }
    getArtwork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.handler.getArtwork(parseInt(req.params.id));
                res.status(200).json(response);
            }
            catch (error) {
                (0, errorHandler_1.default)(error, res);
            }
        });
    }
}
exports.default = ArtWorksChicagoController;
