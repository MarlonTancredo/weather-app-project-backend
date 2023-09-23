import { Request, Response } from "express";
import { getGeoLocationService } from "../services/get_geo_location";

export const getGeoLocation = async (
  req: Request<object, object, object, { cityName: string | undefined }>,
  res: Response
) => {
  const cityName = req.query.cityName;
  const cityGeoLocation = await getGeoLocationService(cityName);
  res.json(cityGeoLocation).status(200);
};
