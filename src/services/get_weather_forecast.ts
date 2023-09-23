import { WeatherDetails } from "../models/types";
import { LocationForecast } from "../models/types";

export const getWeatherForecast = async (
  latitude = 51.50853,
  longitude = -0.12574
): Promise<WeatherDetails | LocationForecast> => {
  const response = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${latitude}&lon=${longitude}`
  );
  const data = await response.json();

  const { updated_at } = data.properties.meta;

  const { air_temperature, wind_from_direction, wind_speed } =
    data.properties.timeseries[0].data.instant.details;

  const { air_temperature_max, air_temperature_min } =
    data.properties.timeseries[0].data.next_6_hours.details;

  const { symbol_code } =
    data.properties.timeseries[0].data.next_12_hours.summary;

  return {
    updated_at: updated_at,
    current_air_temperature: air_temperature,
    wind_from_direction: wind_from_direction,
    wind_speed: wind_speed,
    high_air_temperature: air_temperature_max,
    low_air_temperature: air_temperature_min,
    symbol_code: symbol_code,
  };
};
