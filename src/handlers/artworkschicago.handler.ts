import ArtWorksChicagoService from "../services/artworkschicago.service";

class ArtWorksChicagoHandler {
  service = new ArtWorksChicagoService();

  async getArtWorks() {
    const response = await this.service.getArtWorks();

    return response.data;
  }

  async getSearch(busqueda: string) {
    const response = await this.service.getSearch(busqueda);

    return response.data;
  }

  async getPageMas(pagina: number) {
    const response = await this.service.getPageMas(pagina);

    return response.data;
  }

  async getPageMenos(pagina: number) {
    const response = await this.service.getPageMenos(pagina);

    return response.data;
  }

  async getArtwork(id: number) {
    const response = await this.service.getArtwork(id);

    return response.data;
  }
}

export default ArtWorksChicagoHandler;
