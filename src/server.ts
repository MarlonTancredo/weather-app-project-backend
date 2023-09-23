import { app } from "./app";
import { fetchWeatherFromAPI } from "./repository/fetch_weather_from_api";

export const server = app.listen(3000, async () => {
	console.log("Server running on port 3000");
	const f = await fetchWeatherFromAPI(56, 23.9);
	//console.log(f);
});