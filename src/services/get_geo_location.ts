import { LocationDetails } from "../models/types";

export const getGeoLocationService = async (cityName = "London"): Promise<LocationDetails> => {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`);
    const data = await response.json();
    const { name, admin1, latitude, longitude, country, timezone } = data.results[0];

    return {
        name: name,
        admin: admin1,
        country: country,
        latitude: latitude,
        longitude: longitude,
        timezone: timezone,
    };
};
