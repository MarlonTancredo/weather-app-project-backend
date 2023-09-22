import { app } from "./app";
import { fetchWeather, myLocation } from "./models/weather";

export const server = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

fetchWeather(myLocation);
