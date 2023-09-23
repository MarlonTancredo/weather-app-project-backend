import { LocationForecast, WeatherDetails } from "../models/types";
import { fetchWeatherFromAPI } from "../repository/fetch_weather_from_api";

export async function getWeatherForecast(latitude: number, longitude: number) {
	const data = await fetchWeatherFromAPI(latitude, longitude);
	console.log("getWeatherForecast works");
	const weatherForecast: LocationForecast = {
		updated_at: data.properties.meta.updated_at,
	};
	return weatherForecast;
}
