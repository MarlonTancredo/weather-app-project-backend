import { Request, Response } from "express";
import { getGeoLocationService } from "../services/get_geo_location";
import { getWeatherService } from "../services/get_weather_forecast";

export const getWeatherInformation = async (
  req: Request<object, object, object, { cityName: string | undefined }>,
  res: Response
) => {
  try {
    const cityName = req.query.cityName;

    const geoLocation = await getGeoLocationService(cityName);
    const { latitude, longitude } = geoLocation;

    const weatherInformation = await getWeatherService(latitude, longitude);

    res.json({ geoLocation, weatherInformation }).status(200);
  } catch ({ message }: any) {
    res.json(message);
  }
};
