import express from "express";
import * as geoLocationController from "../controllers/geo_location_controller";

export const router = express.Router();

router.get("/geo-location", geoLocationController.getGeoLocation);
