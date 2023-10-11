import { WeatherDetails } from "../models/types";
import { fetchWeatherFromAPI } from "../repository/fetch_weather_from_api";

export async function getWeatherForecast(latitude = 51.50853, longitude = -0.12574, timeDifference = 4) {
    const data = await fetchWeatherFromAPI(latitude, longitude);
    console.log("getWeatherForecast works");

    const { updated_at } = data.properties.meta;

    // data for current day's weather
    const current_day = data.properties.timeseries[0];
    const { air_temperature, wind_from_direction, wind_speed } = current_day.data.instant.details;
    const { symbol_code } = current_day.data.next_12_hours.summary;
    const { air_temperature_max, air_temperature_min } = current_day.data.next_6_hours.details;
    // data for next days
    const timeseries = data.properties.timeseries;

    function nextDayData(nextMorningString: string) {
        console.log(nextMorningString);
        const e = timeseries.find((ee: any) => ee.time === nextMorningString);
        if (e) {
            return {
                time: nextMorning.toDateString(),
                symbol_code: e.data.next_12_hours.summary.symbol_code,
                high_air_temperature: e.data.next_6_hours.details.air_temperature_max,
                low_air_temperature: e.data.next_6_hours.details.air_temperature_min,
            };
        } else {
            console.log(`time ${nextMorningString} not found in timeseries`);
            return undefined;
        }
    }

    // find the begining of the next meteo day - next day 9am
    const todayUTC = new Date(timeseries[0].time); // UTC current day

    const localTime = new Date(todayUTC);
    localTime.setTime(todayUTC.getTime() + timeDifference * 60 * 60 * 1000);

    const nextMorning = new Date(localTime);
    nextMorning.setDate(localTime.getDate() + 1);
    // nextMorning.setHours(9, 0, 0); // Local time
    let nextMorningString = nextMorning.toISOString().split("T")[0] + "T06:00:00Z"; // UTC

    let nextDays: Array<WeatherDetails | undefined> = [];
    for (let i = 0; i <= 2; i++) {
        const e = nextDayData(nextMorningString);
        if (e) {
            nextDays.push(e);
            nextMorning.setDate(nextMorning.getDate() + 1);
            nextMorningString = nextMorning.toISOString().split("T")[0] + "T06:00:00Z"; // UTC
        } else break;
    }

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
        timeseries: nextDays,
    };
}
