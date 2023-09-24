export const fetchWeatherFromAPI = async (
	latitude: number,
	longitude: number
) => {
	console.log("lat=" + latitude + ", lon=" + longitude);
	const requestString = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${latitude}&lon=${longitude}`;
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
	} catch (error) {
		return Promise.reject(error);
	}
};
