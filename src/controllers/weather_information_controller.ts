import { Request, Response } from "express";
import { getGeoLocationService } from "../services/get_geo_location";
import { getWeatherForecast } from "../services/get_weather_forecast";
import { fetchLocalTimeFromAPI } from "../repository/fetch_local_time_from_api";

export const getWeatherInformation = async (
    req: Request<object, object, object, { cityName: string | undefined }>,
    res: Response
) => {
    try {
        const cityName = req.query.cityName;

        const geoLocation = await getGeoLocationService(cityName);
        const { latitude, longitude } = geoLocation;

        const localTime = await fetchLocalTimeFromAPI(geoLocation.timezone);

        const weatherInformation = await getWeatherForecast(latitude, longitude);
        res.json({ geoLocation, localTime, weatherInformation }).status(200);
    } catch ({ message }: any) {
        res.json(message);
    }
};
