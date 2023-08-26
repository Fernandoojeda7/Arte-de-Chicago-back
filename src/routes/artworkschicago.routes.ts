import { Router } from "express";
import ArtWorksChicagoController from "../controllers/artworkschicago.controller";

const controller = new ArtWorksChicagoController();
const artWorksChicagoRouter = Router();

artWorksChicagoRouter.get("/art_works", (req, res) =>
  controller.getArtWorks(req, res)
);

artWorksChicagoRouter.get("/search", (req, res) =>
  controller.getSearch(req, res)
);

artWorksChicagoRouter.get("/page_mas", (req, res) =>
  controller.getPageMas(req, res)
);

artWorksChicagoRouter.get("/page_menos", (req, res) =>
  controller.getPageMenos(req, res)
);

artWorksChicagoRouter.get("/art_work/:id", (req, res) =>
  controller.getArtwork(req, res)
);
export default artWorksChicagoRouter;
