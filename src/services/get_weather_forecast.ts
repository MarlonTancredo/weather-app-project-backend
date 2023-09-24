import { LocationForecast, WeatherDetails } from "../models/types";
import { fetchWeatherFromAPI } from "../repository/fetch_weather_from_api";

export async function getWeatherForecast(
	latitude = 51.50853,
	longitude = -0.12574
) {
	const data = await fetchWeatherFromAPI(latitude, longitude);
	console.log("getWeatherForecast works");

	const { updated_at } = data.properties.meta;

	const { air_temperature, wind_from_direction, wind_speed } =
		data.properties.timeseries[0].data.instant.details;

	const { symbol_code } =
		data.properties.timeseries[0].data.next_12_hours.summary;

	// find current_day.high_air_temperature
	const currentDayHighAirTemperature = 20;
	console.log(
		data.properties.timeseries[0].data.next_6_hours.details
			.air_temperature_max,
		data.properties.timeseries[5].data.next_6_hours.details
			.air_temperature_max
	);
	// find current_day.low_air_temperature
	const currentDayLowhAirTemperature = 0;

	return {
		updated_at: updated_at,
		current_day: {
			current_air_temperature: air_temperature, // celsius
			high_air_temperature: currentDayHighAirTemperature,
			low_air_temperature: currentDayLowhAirTemperature,
			wind_from_direction: wind_from_direction, // degrees - (0° is north, 90° east, etc.)
			wind_speed: wind_speed, // m/s
			symbol_code: symbol_code,
		},
	};
}
