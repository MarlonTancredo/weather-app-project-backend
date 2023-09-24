import { LocationForecast, WeatherDetails } from "../models/types";
import { fetchWeatherFromAPI } from "../repository/fetch_weather_from_api";

export async function getWeatherForecast(latitude: number, longitude: number) {
	const data = await fetchWeatherFromAPI(latitude, longitude);
	console.log("getWeatherForecast works");
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
	const weatherForecast: LocationForecast = {
		updated_at: data.properties.meta.updated_at,
		current_day: {
			current_air_temperature:
				data.properties.timeseries[0].data.instant.details
					.air_temperature,
			high_air_temperature: currentDayHighAirTemperature, // celsius
			low_air_temperature: currentDayLowhAirTemperature, // celsius
			wind_from_direction:
				data.properties.timeseries[0].data.instant.details
					.wind_from_direction, // degrees - (0° is north, 90° east, etc.)
			wind_speed:
				data.properties.timeseries[0].data.instant.details.wind_speed, // m/s
			symbol_code:
				data.properties.timeseries[0].data.next_12_hours.summary
					.symbol_code,
		},
	};
	return weatherForecast;
}
