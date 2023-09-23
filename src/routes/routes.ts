import express from "express";
import * as geoLocationController from "../controllers/weather_information_controller";

export const router = express.Router();

router.get("/weather", geoLocationController.getWeatherInformation);
