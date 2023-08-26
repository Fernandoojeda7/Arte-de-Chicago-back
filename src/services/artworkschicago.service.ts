import axios from "axios";
import dotenv from "dotenv";
dotenv.config().parsed;

class ArtWorksChicagoService {
  getArtWorks() {
    return axios.get(`https://api.artic.edu/api/v1/artworks`);
  }

  getSearch(busqueda: string) {
    return axios.get(
      `https://api.artic.edu/api/v1/artworks/search?q=${busqueda}`
    );
  }

  getPageMas(pagina: number) {
    return axios.get(`https://api.artic.edu/api/v1/artworks?page=${pagina}`);
  }

  getPageMenos(pagina: number) {
    return axios.get(`https://api.artic.edu/api/v1/artworks?page=${pagina}`);
  }

  getArtwork(id: number) {
    return axios.get(`https://api.artic.edu/api/v1/artworks/${id}`);
  }
}

export default ArtWorksChicagoService;
