import errorHandler from "../utils/errorHandler";
import { Request, Response } from "express";
import ArtWorksChicagoHandler from "../handlers/artworkschicago.handler";

class ArtWorksChicagoController {
  handler = new ArtWorksChicagoHandler();
  async getArtWorks(_req: Request, res: Response) {
    try {
      const response = await this.handler.getArtWorks();
      res.status(200).json(response);
    } catch (error) {
      errorHandler(error, res);
    }
  }
  async getSearch(req: Request, res: Response) {
    try {
      const response = await this.handler.getSearch(
        req.query.busqueda as string
      );
      res.status(200).json(response);
    } catch (error) {
      errorHandler(error, res);
    }
  }

  async getPageMas(req: Request, res: Response) {
    try {
      const response = await this.handler.getPageMas(
        parseInt(req.query.pagina as string)
      );
      res.status(200).json(response);
    } catch (error) {
      errorHandler(error, res);
    }
  }

  async getPageMenos(req: Request, res: Response) {
    try {
      const response = await this.handler.getPageMenos(
        parseInt(req.query.pagina as string)
      );
      res.status(200).json(response);
    } catch (error) {
      errorHandler(error, res);
    }
  }

  async getArtwork(req: Request, res: Response) {
    try {
      const response = await this.handler.getArtwork(
        parseInt(req.params.id as string)
      );
      res.status(200).json(response);
    } catch (error) {
      errorHandler(error, res);
    }
  }
}
export default ArtWorksChicagoController;
