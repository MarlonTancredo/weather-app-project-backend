import { WeatherDetails } from "../models/types";

export const getWeatherService = async (
  latitude = 51.50853,
  longitude = -0.12574
): Promise<WeatherDetails> => {
  const response = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${latitude}&lon=${longitude}`
  );
  const data = await response.json();

  const { air_temperature, wind_from_direction, wind_speed } =
    data.properties.timeseries[0].data.instant.details;

  const { air_temperature_max, air_temperature_min } =
    data.properties.timeseries[0].data.next_6_hours.details;

  const { symbol_code } =
    data.properties.timeseries[0].data.next_12_hours.summary;

  return {
    current_air_temperature: air_temperature,
    wind_from_direction: wind_from_direction,
    wind_speed: wind_speed,
    high_air_temperature: air_temperature_max,
    low_air_temperature: air_temperature_min,
    symbol_code: symbol_code,
  };
};
