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
const artworkschicago_service_1 = __importDefault(require("../services/artworkschicago.service"));
class ArtWorksChicagoHandler {
    constructor() {
        this.service = new artworkschicago_service_1.default();
    }
    getArtWorks() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.getArtWorks();
            return response.data;
        });
    }
    getSearch(busqueda) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.getSearch(busqueda);
            return response.data;
        });
    }
    getPageMas(pagina) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.getPageMas(pagina);
            return response.data;
        });
    }
    getPageMenos(pagina) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.getPageMenos(pagina);
            return response.data;
        });
    }
    getArtwork(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.getArtwork(id);
            return response.data;
        });
    }
}
exports.default = ArtWorksChicagoHandler;
