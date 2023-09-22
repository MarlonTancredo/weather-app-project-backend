import { Request, Response } from "express";
import * as geoLocationService from "../services/get_geo_location";

export const getGeoLocation = async (
  req: Request<object, object, object, { cityName: string | undefined }>,
  res: Response
) => {
  const cityName = req.query.cityName;
  const city = geoLocationService.getGeoLocation(cityName);
  res.json(city).status(200);
};
