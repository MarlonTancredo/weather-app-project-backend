import { app } from "./app";
import { getWeatherForecast } from "./services/get_weather_forecast";

export const server = app.listen(3000, async () => {
	console.log("Server running on port 3000");
	const f = await getWeatherForecast(56, 23.9);
	//console.log(f);
});