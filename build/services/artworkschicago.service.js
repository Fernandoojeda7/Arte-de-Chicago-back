"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config().parsed;
class ArtWorksChicagoService {
    getArtWorks() {
        return axios_1.default.get(`https://api.artic.edu/api/v1/artworks`);
    }
    getSearch(busqueda) {
        return axios_1.default.get(`https://api.artic.edu/api/v1/artworks/search?q=${busqueda}`);
    }
    getPageMas(pagina) {
        return axios_1.default.get(`https://api.artic.edu/api/v1/artworks?page=${pagina}`);
    }
    getPageMenos(pagina) {
        return axios_1.default.get(`https://api.artic.edu/api/v1/artworks?page=${pagina}`);
    }
    getArtwork(id) {
        return axios_1.default.get(`https://api.artic.edu/api/v1/artworks/${id}`);
    }
}
exports.default = ArtWorksChicagoService;
