import {
	LocationDetails,
	LocationForecast,
	LocalTime,
	WeatherDetails,
} from "./types";
async function fetchWeather(location: LocationDetails) {
	const response = await fetch(
		"https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=" +
			location.latitude +
			"&lon=" +
			location.longitude
	);

	const data = await response.json();
	const forecast: LocationForecast = {
		updated_at: data.properties.meta.updated_at,
		location: location,
		local_time: myLocalTime,
		current_day: {
			current_air_temperature:
				data.properties.timeseries[1].data.instant.details
					.air_temperature,
			high_air_temperature: 99, // celsius
			low_air_temperature: -10, // celsius
			wind_from_direction:
				data.properties.timeseries[1].data.instant.details
					.wind_from_direction, // degrees - (0° is north, 90° east, etc.)
			wind_speed:
				data.properties.timeseries[1].data.instant.details.wind_speed, // m/s
			symbol_code:
				data.properties.timeseries[1].data.next_12_hours.summary
					.symbol_code,
		},
		timeseries: [],
	};

	console.log(data.timeseries, forecast);
}

const myLocation = {
	name: "TheCity",
	country: "SomeCountry",
	admin: "Neverland Gardens", // calculated from admin1, admin2, admin3
	latitude: 66.97, //Math.random() * 90,
	longitude: 23.964, //Math.random() * 180,
	timezone: "Europe/Riga",
};
const myLocalTime = {
	year: 2023,
	month: 9,
	day: 22,
	hour: 12,
	minute: 39,
	dayOfWeek: "Saturday",
};
fetchWeather(myLocation);
