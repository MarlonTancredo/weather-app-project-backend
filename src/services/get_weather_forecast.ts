import { LocationForecast, WeatherDetails } from "../models/types";
import { fetchWeatherFromAPI } from "../repository/fetch_weather_from_api";

export async function getWeatherForecast(
  latitude = 51.50853,
  longitude = -0.12574,
  timeDifference = 3
) {
  const data = await fetchWeatherFromAPI(latitude, longitude);
  console.log("getWeatherForecast works");

  const { updated_at } = data.properties.meta;
  const current_day = data.properties.timeseries[0];

  const { air_temperature, wind_from_direction, wind_speed } =
    current_day.data.instant.details;

  const { symbol_code } = current_day;
  const { air_temperature_max, air_temperature_min } =
    current_day.data.next_6_hours.details;

  const timeseries = data.properties.timeseries;

  // find the begining of the next meteo day - next day 9am
  const todayUTC = new Date(timeseries[0].time); // UTC current day

  const localTime = new Date(todayUTC);
  localTime.setTime(todayUTC.getTime() + timeDifference * 60 * 60 * 1000);

  const nextMorning = new Date(localTime);
  nextMorning.setDate(localTime.getDate() + 1);
  nextMorning.setHours(9, 0, 0); // Local time
  let nextMorningString = nextMorning.toISOString().substring(0, 19) + "Z"; // UTC

  // console.log("timeseries[0] " + todayUTC.toString());
  // console.log("localTime" + localTime.toString());
  // console.log(
  // 	"next Morning " + nextMorning.toString(),
  // 	nextMorning.toISOString(),
  // 	nextMorningString
  // );

  let e = timeseries.find((ee: any) => {
    if (ee.time === nextMorningString) {
      return ee;
    }
  });
  const next_day1: WeatherDetails = {
    time: nextMorning.toDateString(),
    symbol_code: e.data.next_12_hours.summary.symbol_code,
    high_air_temperature: e.data.next_6_hours.details.air_temperature_max,
    low_air_temperature: e.data.next_6_hours.details.air_temperature_min,
  };
  // next next day
  nextMorning.setDate(nextMorning.getDate() + 1);
  nextMorningString = nextMorning.toISOString().substring(0, 19) + "Z"; // UTC

  e = timeseries.find((ee: any) => {
    if (ee.time === nextMorningString) {
      return ee;
    }
  });
  const next_day2: WeatherDetails = {
    time: nextMorning.toDateString(),
    symbol_code: e.data.next_12_hours.summary.symbol_code,
    high_air_temperature: e.data.next_6_hours.details.air_temperature_max,
    low_air_temperature: e.data.next_6_hours.details.air_temperature_min,
  };
  // next next next day
  // nextMorning.setDate(nextMorning.getDate() + 1);
  // nextMorningString = nextMorning.toISOString().substring(0, 19) + "Z"; // UTC

  e = timeseries.find((ee: any) => {
    if (ee.time === nextMorningString) {
      return ee;
    }
  });
  const next_day3: WeatherDetails = {
    time: nextMorning.toDateString(),
    symbol_code: e.data.next_12_hours.summary.symbol_code,
    high_air_temperature: e.data.next_6_hours.details.air_temperature_max,
    low_air_temperature: e.data.next_6_hours.details.air_temperature_min,
  };
  // console.log(e);

  // console.log(next_day);

  return {
    updated_at: updated_at,
    current_day: {
      time: localTime.toDateString(),
      current_air_temperature: air_temperature, // celsius
      high_air_temperature: air_temperature_max,
      low_air_temperature: air_temperature_min,
      wind_from_direction: wind_from_direction, // degrees - (0° is north, 90° east, etc.)
      wind_speed: wind_speed, // m/s
      symbol_code: symbol_code,
    },
    timeseries: [next_day1, next_day2, next_day3],
  };
}
