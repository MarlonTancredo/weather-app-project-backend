import { expect, jest, test } from "@jest/globals";
import { getWeatherForecast } from "./get_weather_forecast";
import { mockWeatherData } from "../models/weather_mock_data";

import * as fetchAPI from "../repository/fetch_weather_from_api";
jest.mock("../repository/fetch_weather_from_api");

afterEach(() => {
	jest.clearAllMocks();
});

describe("return mock data for getWeatherForecast", () => {
	test("return correct value for 'updated_at'", async () => {
		// ARRANGE
		jest.spyOn(fetchAPI, "fetchWeatherFromAPI").mockResolvedValue(
			mockWeatherData
		);
		// ACT
		const res = await getWeatherForecast(23.9643, 56.9718);
		// ASSERT
		expect(res.updated_at).toEqual(
			mockWeatherData.properties.meta.updated_at
		);
	});
});
