export const getGeoLocationService = async (cityName = "London") => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
  );
  const data = await response.json();
  const {
    id,
    name,
    latitude,
    longitude,
    country,
    country_code,
    timezone,
    population,
  } = data.results[0];

  return {
    id: id,
    name: name,
    latitude: latitude,
    longitude: longitude,
    timezone: timezone,
    population: population,
    country: country,
    countryCode: country_code,
  };
};
