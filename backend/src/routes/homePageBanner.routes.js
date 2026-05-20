import { Router } from "express";
import {
  createHomePageBanner,
  deleteHomePageBanner,
  getHomePageBanner,
  listHomePageBanners,
  updateHomePageBanner,
} from "../controllers/homePageBannerController.js";

const homePageBannerRoutes = Router();

homePageBannerRoutes.get("/banner", listHomePageBanners);
homePageBannerRoutes.get("/banner/:id", getHomePageBanner);
homePageBannerRoutes.post("/banner", createHomePageBanner);
homePageBannerRoutes.patch("/banner/:id", updateHomePageBanner);
homePageBannerRoutes.delete("/banner/:id", deleteHomePageBanner);

export default homePageBannerRoutes;
