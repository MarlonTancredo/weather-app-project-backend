// import { LocationForecast, WeatherDetails } from "../models/types";
// import { Request, Response } from "express";

export async function fetchWeatherFromAPI(latitude: number, longitude: number) {
	console.log("lat=" + latitude + ", lon=" + longitude);
	const requestString =
		"https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=" +
		latitude +
		"&lon=" +
		longitude;
	try {
		const response = await fetch(requestString);
		if (response.ok) {
			console.log("Fetched: " + requestString);
			const data = await response.json();
			return data;
		} else {
			console.log(requestString);
			console.log(response.status, response.statusText);
		}
		// const data = await response.json();
		// console.log(data);
		// return data;
	} catch (error) {
		return Promise.reject(error);
	}

	// const data = await response.json();
	// console.log(response);
	// if (response.ok) {
	// 	return data;
	// } else {
	// 	// code to add - errors
	// 	const error = new Error("error");
	// 	return Promise.reject(error);
	// }
}
