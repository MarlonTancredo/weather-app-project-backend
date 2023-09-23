import { LocationForecast, WeatherDetails } from "../models/types";
import { fetchWeatherFromAPI } from "../repository/fetch_weather_from_api";

export async function getWeatherForecast(latitude: number, longitude: number) {
	const f = await fetchWeatherFromAPI(latitude, longitude);
	console.log("getWeatherForecast works");
}
