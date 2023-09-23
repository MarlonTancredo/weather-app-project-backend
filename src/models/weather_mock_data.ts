export const mockWeatherData = {
	type: "Feature",
	geometry: {
		type: "Point",
		coordinates: [23.9643, 56.9718, 6],
	},
	properties: {
		meta: {
			updated_at: "2023-09-22T18:38:59Z",
			units: {
				air_pressure_at_sea_level: "hPa",
				air_temperature: "celsius",
				air_temperature_max: "celsius",
				air_temperature_min: "celsius",
				air_temperature_percentile_10: "celsius",
				air_temperature_percentile_90: "celsius",
				cloud_area_fraction: "%",
				cloud_area_fraction_high: "%",
				cloud_area_fraction_low: "%",
				cloud_area_fraction_medium: "%",
				dew_point_temperature: "celsius",
				fog_area_fraction: "%",
				precipitation_amount: "mm",
				precipitation_amount_max: "mm",
				precipitation_amount_min: "mm",
				probability_of_precipitation: "%",
				probability_of_thunder: "%",
				relative_humidity: "%",
				ultraviolet_index_clear_sky: "1",
				wind_from_direction: "degrees",
				wind_speed: "m/s",
				wind_speed_of_gust: "m/s",
				wind_speed_percentile_10: "m/s",
				wind_speed_percentile_90: "m/s",
			},
		},
		timeseries: [
			{
				time: "2023-09-22T19:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1007.4,
							air_temperature: 21.0,
							air_temperature_percentile_10: 20.0,
							air_temperature_percentile_90: 21.8,
							cloud_area_fraction: 74.1,
							cloud_area_fraction_high: 72.5,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 6.6,
							dew_point_temperature: 12.6,
							fog_area_fraction: 0.0,
							relative_humidity: 58.4,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 138.3,
							wind_speed: 3.9,
							wind_speed_of_gust: 9.1,
							wind_speed_percentile_10: 3.2,
							wind_speed_percentile_90: 5.2,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "cloudy",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 27.8,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.2,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							air_temperature_max: 20.7,
							air_temperature_min: 20.2,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-22T20:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1007.1,
							air_temperature: 20.7,
							air_temperature_percentile_10: 19.5,
							air_temperature_percentile_90: 21.7,
							cloud_area_fraction: 22.4,
							cloud_area_fraction_high: 19.0,
							cloud_area_fraction_low: 0.7,
							cloud_area_fraction_medium: 3.5,
							dew_point_temperature: 12.4,
							fog_area_fraction: 0.0,
							relative_humidity: 58.9,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 141.6,
							wind_speed: 4.2,
							wind_speed_of_gust: 9.3,
							wind_speed_percentile_10: 3.5,
							wind_speed_percentile_90: 5.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "cloudy",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 27.8,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "fair_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.3,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 20.4,
							air_temperature_min: 20.2,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-22T21:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1006.5,
							air_temperature: 20.4,
							air_temperature_percentile_10: 19.1,
							air_temperature_percentile_90: 21.6,
							cloud_area_fraction: 92.0,
							cloud_area_fraction_high: 91.8,
							cloud_area_fraction_low: 1.5,
							cloud_area_fraction_medium: 2.8,
							dew_point_temperature: 12.7,
							fog_area_fraction: 0.0,
							relative_humidity: 60.7,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 142.9,
							wind_speed: 4.4,
							wind_speed_of_gust: 9.7,
							wind_speed_percentile_10: 3.3,
							wind_speed_percentile_90: 5.1,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "cloudy",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 28.9,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.3,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 20.3,
							air_temperature_min: 19.9,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 1.6,
						},
					},
				},
			},
			{
				time: "2023-09-22T22:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1006.2,
							air_temperature: 20.3,
							air_temperature_percentile_10: 18.6,
							air_temperature_percentile_90: 21.7,
							cloud_area_fraction: 85.5,
							cloud_area_fraction_high: 83.7,
							cloud_area_fraction_low: 11.6,
							cloud_area_fraction_medium: 3.8,
							dew_point_temperature: 13.1,
							fog_area_fraction: 0.0,
							relative_humidity: 62.7,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 143.9,
							wind_speed: 4.5,
							wind_speed_of_gust: 9.7,
							wind_speed_percentile_10: 3.3,
							wind_speed_percentile_90: 5.1,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "lightrain",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 45.1,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 1.6,
							probability_of_thunder: 0.4,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 20.3,
							air_temperature_min: 19.7,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.8,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 15.7,
						},
					},
				},
			},
			{
				time: "2023-09-22T23:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1006.1,
							air_temperature: 20.3,
							air_temperature_percentile_10: 18.1,
							air_temperature_percentile_90: 21.7,
							cloud_area_fraction: 98.9,
							cloud_area_fraction_high: 98.6,
							cloud_area_fraction_low: 15.7,
							cloud_area_fraction_medium: 16.5,
							dew_point_temperature: 13.6,
							fog_area_fraction: 0.0,
							relative_humidity: 64.9,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 149.7,
							wind_speed: 4.5,
							wind_speed_of_gust: 9.8,
							wind_speed_percentile_10: 3.3,
							wind_speed_percentile_90: 4.7,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "lightrain",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 66.5,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.6,
							probability_of_thunder: 0.1,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 20.2,
							air_temperature_min: 19.3,
							precipitation_amount: 0.0,
							precipitation_amount_max: 1.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 20.7,
						},
					},
				},
			},
			{
				time: "2023-09-23T00:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1006.1,
							air_temperature: 20.2,
							air_temperature_percentile_10: 18.0,
							air_temperature_percentile_90: 21.8,
							cloud_area_fraction: 99.8,
							cloud_area_fraction_high: 99.7,
							cloud_area_fraction_low: 6.3,
							cloud_area_fraction_medium: 10.2,
							dew_point_temperature: 13.9,
							fog_area_fraction: 0.0,
							relative_humidity: 66.2,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 147.2,
							wind_speed: 4.3,
							wind_speed_of_gust: 9.8,
							wind_speed_percentile_10: 3.3,
							wind_speed_percentile_90: 5.0,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "rain",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 75.5,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.8,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 20.2,
							air_temperature_min: 19.3,
							precipitation_amount: 0.0,
							precipitation_amount_max: 1.8,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 25.6,
						},
					},
				},
			},
			{
				time: "2023-09-23T01:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1006.0,
							air_temperature: 20.2,
							air_temperature_percentile_10: 17.9,
							air_temperature_percentile_90: 21.6,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 100.0,
							cloud_area_fraction_low: 33.9,
							cloud_area_fraction_medium: 42.4,
							dew_point_temperature: 13.9,
							fog_area_fraction: 0.0,
							relative_humidity: 66.5,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 146.5,
							wind_speed: 4.4,
							wind_speed_of_gust: 9.6,
							wind_speed_percentile_10: 3.5,
							wind_speed_percentile_90: 5.1,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "rain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 83.9,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 1.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 20.2,
							air_temperature_min: 19.3,
							precipitation_amount: 0.0,
							precipitation_amount_max: 1.9,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 26.7,
						},
					},
				},
			},
			{
				time: "2023-09-23T02:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1006.1,
							air_temperature: 20.2,
							air_temperature_percentile_10: 17.8,
							air_temperature_percentile_90: 21.5,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 99.9,
							cloud_area_fraction_low: 56.5,
							cloud_area_fraction_medium: 81.0,
							dew_point_temperature: 13.9,
							fog_area_fraction: 0.0,
							relative_humidity: 66.4,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 155.5,
							wind_speed: 4.2,
							wind_speed_of_gust: 9.6,
							wind_speed_percentile_10: 3.1,
							wind_speed_percentile_90: 5.1,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "rain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 90.6,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 8.0,
							probability_of_thunder: 5.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 19.9,
							air_temperature_min: 18.0,
							precipitation_amount: 0.0,
							precipitation_amount_max: 1.9,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 26.8,
						},
					},
				},
			},
			{
				time: "2023-09-23T03:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1006.1,
							air_temperature: 19.9,
							air_temperature_percentile_10: 17.6,
							air_temperature_percentile_90: 20.9,
							cloud_area_fraction: 99.9,
							cloud_area_fraction_high: 98.4,
							cloud_area_fraction_low: 28.3,
							cloud_area_fraction_medium: 76.3,
							dew_point_temperature: 13.7,
							fog_area_fraction: 0.0,
							relative_humidity: 67.1,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 155.9,
							wind_speed: 4.1,
							wind_speed_of_gust: 9.2,
							wind_speed_percentile_10: 3.0,
							wind_speed_percentile_90: 4.8,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "rain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 90.8,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.7,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 24.3,
							probability_of_thunder: 1.7,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 19.7,
							air_temperature_min: 17.6,
							precipitation_amount: 0.0,
							precipitation_amount_max: 3.9,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 27.2,
						},
					},
				},
			},
			{
				time: "2023-09-23T04:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1006.3,
							air_temperature: 19.7,
							air_temperature_percentile_10: 17.2,
							air_temperature_percentile_90: 20.7,
							cloud_area_fraction: 99.3,
							cloud_area_fraction_high: 96.0,
							cloud_area_fraction_low: 62.6,
							cloud_area_fraction_medium: 51.5,
							dew_point_temperature: 14.1,
							fog_area_fraction: 0.0,
							relative_humidity: 69.7,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 159.6,
							wind_speed: 4.1,
							wind_speed_of_gust: 9.3,
							wind_speed_percentile_10: 3.0,
							wind_speed_percentile_90: 4.7,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "rain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 90.8,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.3,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 14.1,
							probability_of_thunder: 0.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "lightrain",
						},
						details: {
							air_temperature_max: 19.6,
							air_temperature_min: 16.8,
							precipitation_amount: 0.6,
							precipitation_amount_max: 5.9,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 36.4,
						},
					},
				},
			},
			{
				time: "2023-09-23T05:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1006.6,
							air_temperature: 19.3,
							air_temperature_percentile_10: 16.8,
							air_temperature_percentile_90: 20.1,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 100.0,
							cloud_area_fraction_low: 39.2,
							cloud_area_fraction_medium: 71.1,
							dew_point_temperature: 14.6,
							fog_area_fraction: 0.0,
							relative_humidity: 73.5,
							ultraviolet_index_clear_sky: 0.1,
							wind_from_direction: 163.0,
							wind_speed: 3.6,
							wind_speed_of_gust: 9.0,
							wind_speed_percentile_10: 2.8,
							wind_speed_percentile_90: 4.2,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "rain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 90.8,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.5,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 16.6,
							probability_of_thunder: 0.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "rain",
						},
						details: {
							air_temperature_max: 19.6,
							air_temperature_min: 16.2,
							precipitation_amount: 3.4,
							precipitation_amount_max: 6.8,
							precipitation_amount_min: 0.1,
							probability_of_precipitation: 62.0,
						},
					},
				},
			},
			{
				time: "2023-09-23T06:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1007.1,
							air_temperature: 19.4,
							air_temperature_percentile_10: 16.4,
							air_temperature_percentile_90: 20.4,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 98.2,
							cloud_area_fraction_low: 62.9,
							cloud_area_fraction_medium: 96.7,
							dew_point_temperature: 15.0,
							fog_area_fraction: 0.0,
							relative_humidity: 74.9,
							ultraviolet_index_clear_sky: 0.5,
							wind_from_direction: 173.7,
							wind_speed: 3.1,
							wind_speed_of_gust: 7.7,
							wind_speed_percentile_10: 2.3,
							wind_speed_percentile_90: 3.9,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "rain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 90.8,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 4.2,
							probability_of_thunder: 1.1,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "heavyrain",
						},
						details: {
							air_temperature_max: 19.6,
							air_temperature_min: 16.1,
							precipitation_amount: 5.4,
							precipitation_amount_max: 9.0,
							precipitation_amount_min: 0.2,
							probability_of_precipitation: 71.6,
						},
					},
				},
			},
			{
				time: "2023-09-23T07:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1008.1,
							air_temperature: 19.6,
							air_temperature_percentile_10: 16.8,
							air_temperature_percentile_90: 20.7,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 98.7,
							cloud_area_fraction_low: 97.7,
							cloud_area_fraction_medium: 64.8,
							dew_point_temperature: 15.5,
							fog_area_fraction: 0.0,
							relative_humidity: 76.0,
							ultraviolet_index_clear_sky: 1.0,
							wind_from_direction: 213.7,
							wind_speed: 2.0,
							wind_speed_of_gust: 6.6,
							wind_speed_percentile_10: 1.9,
							wind_speed_percentile_90: 3.9,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "rain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 90.8,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 1.0,
							probability_of_thunder: 0.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "heavyrain",
						},
						details: {
							air_temperature_max: 18.0,
							air_temperature_min: 15.0,
							precipitation_amount: 6.7,
							precipitation_amount_max: 13.2,
							precipitation_amount_min: 0.6,
							probability_of_precipitation: 81.8,
						},
					},
				},
			},
			{
				time: "2023-09-23T08:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1009.0,
							air_temperature: 18.0,
							air_temperature_percentile_10: 16.5,
							air_temperature_percentile_90: 21.5,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 99.7,
							cloud_area_fraction_low: 100.0,
							cloud_area_fraction_medium: 70.9,
							dew_point_temperature: 15.3,
							fog_area_fraction: 0.0,
							relative_humidity: 83.3,
							ultraviolet_index_clear_sky: 1.8,
							wind_from_direction: 290.9,
							wind_speed: 2.1,
							wind_speed_of_gust: 7.2,
							wind_speed_percentile_10: 2.1,
							wind_speed_percentile_90: 3.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "rain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 90.8,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.6,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 23.5,
							probability_of_thunder: 1.3,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "heavyrain",
						},
						details: {
							air_temperature_max: 17.6,
							air_temperature_min: 14.8,
							precipitation_amount: 7.5,
							precipitation_amount_max: 16.3,
							precipitation_amount_min: 1.7,
							probability_of_precipitation: 89.0,
						},
					},
				},
			},
			{
				time: "2023-09-23T09:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1009.5,
							air_temperature: 17.6,
							air_temperature_percentile_10: 15.8,
							air_temperature_percentile_90: 21.5,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 98.7,
							cloud_area_fraction_low: 99.5,
							cloud_area_fraction_medium: 100.0,
							dew_point_temperature: 14.9,
							fog_area_fraction: 0.0,
							relative_humidity: 82.7,
							ultraviolet_index_clear_sky: 2.6,
							wind_from_direction: 298.7,
							wind_speed: 1.7,
							wind_speed_of_gust: 4.9,
							wind_speed_percentile_10: 1.4,
							wind_speed_percentile_90: 3.1,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "rain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 90.8,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "rain",
						},
						details: {
							precipitation_amount: 0.5,
							precipitation_amount_max: 2.2,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 50.3,
							probability_of_thunder: 1.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "heavyrain",
						},
						details: {
							air_temperature_max: 16.8,
							air_temperature_min: 14.8,
							precipitation_amount: 9.2,
							precipitation_amount_max: 17.6,
							precipitation_amount_min: 2.0,
							probability_of_precipitation: 90.0,
						},
					},
				},
			},
			{
				time: "2023-09-23T10:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1009.5,
							air_temperature: 16.8,
							air_temperature_percentile_10: 15.4,
							air_temperature_percentile_90: 19.7,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 100.0,
							cloud_area_fraction_low: 95.1,
							cloud_area_fraction_medium: 100.0,
							dew_point_temperature: 15.8,
							fog_area_fraction: 0.0,
							relative_humidity: 92.3,
							ultraviolet_index_clear_sky: 2.9,
							wind_from_direction: 312.9,
							wind_speed: 1.5,
							wind_speed_of_gust: 4.1,
							wind_speed_percentile_10: 1.1,
							wind_speed_percentile_90: 2.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "lightrain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 80.8,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "heavyrain",
						},
						details: {
							precipitation_amount: 2.7,
							precipitation_amount_max: 3.1,
							precipitation_amount_min: 0.1,
							probability_of_precipitation: 73.6,
							probability_of_thunder: 2.1,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "heavyrain",
						},
						details: {
							air_temperature_max: 16.2,
							air_temperature_min: 14.7,
							precipitation_amount: 9.3,
							precipitation_amount_max: 17.2,
							precipitation_amount_min: 0.8,
							probability_of_precipitation: 80.8,
						},
					},
				},
			},
			{
				time: "2023-09-23T11:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1009.9,
							air_temperature: 16.2,
							air_temperature_percentile_10: 15.4,
							air_temperature_percentile_90: 19.3,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 100.0,
							cloud_area_fraction_low: 92.5,
							cloud_area_fraction_medium: 100.0,
							dew_point_temperature: 16.0,
							fog_area_fraction: 0.1,
							relative_humidity: 97.4,
							ultraviolet_index_clear_sky: 2.7,
							wind_from_direction: 294.2,
							wind_speed: 1.2,
							wind_speed_of_gust: 3.1,
							wind_speed_percentile_10: 1.0,
							wind_speed_percentile_90: 2.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "lightrain",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 80.7,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "heavyrain",
						},
						details: {
							precipitation_amount: 1.8,
							precipitation_amount_max: 4.3,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 65.2,
							probability_of_thunder: 3.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "heavyrain",
						},
						details: {
							air_temperature_max: 16.1,
							air_temperature_min: 14.5,
							precipitation_amount: 6.4,
							precipitation_amount_max: 15.0,
							precipitation_amount_min: 0.7,
							probability_of_precipitation: 80.7,
						},
					},
				},
			},
			{
				time: "2023-09-23T12:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1010.4,
							air_temperature: 16.1,
							air_temperature_percentile_10: 15.4,
							air_temperature_percentile_90: 18.4,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 99.2,
							cloud_area_fraction_low: 98.5,
							cloud_area_fraction_medium: 100.0,
							dew_point_temperature: 15.9,
							fog_area_fraction: 0.0,
							relative_humidity: 97.3,
							ultraviolet_index_clear_sky: 2.1,
							wind_from_direction: 290.2,
							wind_speed: 2.4,
							wind_speed_of_gust: 5.0,
							wind_speed_percentile_10: 0.9,
							wind_speed_percentile_90: 3.2,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "lightrain",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 72.4,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "heavyrain",
						},
						details: {
							precipitation_amount: 1.9,
							precipitation_amount_max: 4.9,
							precipitation_amount_min: 0.1,
							probability_of_precipitation: 71.3,
							probability_of_thunder: 1.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "rain",
						},
						details: {
							air_temperature_max: 15.0,
							air_temperature_min: 14.1,
							precipitation_amount: 4.4,
							precipitation_amount_max: 13.5,
							precipitation_amount_min: 0.1,
							probability_of_precipitation: 72.3,
						},
					},
				},
			},
			{
				time: "2023-09-23T13:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1010.7,
							air_temperature: 15.0,
							air_temperature_percentile_10: 14.4,
							air_temperature_percentile_90: 18.7,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 91.7,
							cloud_area_fraction_low: 74.7,
							cloud_area_fraction_medium: 100.0,
							dew_point_temperature: 14.2,
							fog_area_fraction: 0.0,
							relative_humidity: 94.1,
							ultraviolet_index_clear_sky: 1.4,
							wind_from_direction: 269.2,
							wind_speed: 2.3,
							wind_speed_of_gust: 6.8,
							wind_speed_percentile_10: 1.0,
							wind_speed_percentile_90: 4.9,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "lightrain",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 69.4,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "rain",
						},
						details: {
							precipitation_amount: 0.6,
							precipitation_amount_max: 4.4,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 67.6,
							probability_of_thunder: 1.2,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "rain",
						},
						details: {
							air_temperature_max: 14.8,
							air_temperature_min: 13.8,
							precipitation_amount: 2.7,
							precipitation_amount_max: 11.2,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 69.1,
						},
					},
				},
			},
			{
				time: "2023-09-23T14:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1010.9,
							air_temperature: 14.8,
							air_temperature_percentile_10: 14.2,
							air_temperature_percentile_90: 18.3,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 96.6,
							cloud_area_fraction_low: 83.5,
							cloud_area_fraction_medium: 100.0,
							dew_point_temperature: 14.3,
							fog_area_fraction: 0.0,
							relative_humidity: 95.5,
							ultraviolet_index_clear_sky: 0.7,
							wind_from_direction: 258.3,
							wind_speed: 0.9,
							wind_speed_of_gust: 5.0,
							wind_speed_percentile_10: 0.9,
							wind_speed_percentile_90: 3.4,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "lightrain",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 64.3,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "heavyrain",
						},
						details: {
							precipitation_amount: 1.2,
							precipitation_amount_max: 3.5,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 66.2,
							probability_of_thunder: 1.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "rain",
						},
						details: {
							air_temperature_max: 14.8,
							air_temperature_min: 13.4,
							precipitation_amount: 2.1,
							precipitation_amount_max: 8.5,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 62.4,
						},
					},
				},
			},
			{
				time: "2023-09-23T15:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1011.3,
							air_temperature: 14.8,
							air_temperature_percentile_10: 14.1,
							air_temperature_percentile_90: 17.8,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 99.4,
							cloud_area_fraction_low: 64.4,
							cloud_area_fraction_medium: 100.0,
							dew_point_temperature: 14.6,
							fog_area_fraction: 0.1,
							relative_humidity: 97.6,
							ultraviolet_index_clear_sky: 0.2,
							wind_from_direction: 237.9,
							wind_speed: 1.5,
							wind_speed_of_gust: 3.9,
							wind_speed_percentile_10: 1.4,
							wind_speed_percentile_90: 2.9,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "lightrain",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 39.1,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "rain",
						},
						details: {
							precipitation_amount: 0.7,
							precipitation_amount_max: 2.4,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 60.9,
							probability_of_thunder: 0.3,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "lightrain",
						},
						details: {
							air_temperature_max: 14.7,
							air_temperature_min: 12.9,
							precipitation_amount: 0.8,
							precipitation_amount_max: 4.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 35.6,
						},
					},
				},
			},
			{
				time: "2023-09-23T16:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1011.6,
							air_temperature: 14.7,
							air_temperature_percentile_10: 14.1,
							air_temperature_percentile_90: 17.6,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 99.1,
							cloud_area_fraction_low: 21.5,
							cloud_area_fraction_medium: 100.0,
							dew_point_temperature: 14.6,
							fog_area_fraction: 0.2,
							relative_humidity: 97.9,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 204.0,
							wind_speed: 1.1,
							wind_speed_of_gust: 3.4,
							wind_speed_percentile_10: 0.4,
							wind_speed_percentile_90: 2.0,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "cloudy",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 17.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.9,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 25.7,
							probability_of_thunder: 0.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							air_temperature_max: 14.5,
							air_temperature_min: 12.6,
							precipitation_amount: 0.0,
							precipitation_amount_max: 1.2,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 17.0,
						},
					},
				},
			},
			{
				time: "2023-09-23T17:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1012.1,
							air_temperature: 14.5,
							air_temperature_percentile_10: 13.9,
							air_temperature_percentile_90: 16.8,
							cloud_area_fraction: 98.8,
							cloud_area_fraction_high: 97.2,
							cloud_area_fraction_low: 5.1,
							cloud_area_fraction_medium: 54.4,
							dew_point_temperature: 14.4,
							fog_area_fraction: 0.2,
							relative_humidity: 98.3,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 205.7,
							wind_speed: 0.9,
							wind_speed_of_gust: 2.5,
							wind_speed_percentile_10: 0.9,
							wind_speed_percentile_90: 1.9,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "cloudy",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 3.6,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 8.8,
							probability_of_thunder: 0.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 14.1,
							air_temperature_min: 12.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 3.6,
						},
					},
				},
			},
			{
				time: "2023-09-23T18:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1012.5,
							air_temperature: 14.1,
							air_temperature_percentile_10: 13.5,
							air_temperature_percentile_90: 16.5,
							cloud_area_fraction: 99.5,
							cloud_area_fraction_high: 99.4,
							cloud_area_fraction_low: 11.0,
							cloud_area_fraction_medium: 4.9,
							dew_point_temperature: 14.1,
							fog_area_fraction: 0.5,
							relative_humidity: 98.8,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 205.6,
							wind_speed: 1.5,
							wind_speed_of_gust: 3.1,
							wind_speed_percentile_10: 0.8,
							wind_speed_percentile_90: 2.1,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "cloudy",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 1.2,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 9.2,
							probability_of_thunder: 0.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 13.8,
							air_temperature_min: 12.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 1.2,
						},
					},
				},
			},
			{
				time: "2023-09-23T19:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1012.8,
							air_temperature: 13.8,
							air_temperature_percentile_10: 13.2,
							air_temperature_percentile_90: 16.4,
							cloud_area_fraction: 96.4,
							cloud_area_fraction_high: 95.8,
							cloud_area_fraction_low: 10.6,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 13.8,
							fog_area_fraction: 0.4,
							relative_humidity: 99.0,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 210.9,
							wind_speed: 1.7,
							wind_speed_of_gust: 3.8,
							wind_speed_percentile_10: 0.9,
							wind_speed_percentile_90: 2.1,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.1,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 5.6,
							probability_of_thunder: 0.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 13.4,
							air_temperature_min: 12.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.1,
						},
					},
				},
			},
			{
				time: "2023-09-23T20:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1013.1,
							air_temperature: 13.4,
							air_temperature_percentile_10: 12.7,
							air_temperature_percentile_90: 16.3,
							cloud_area_fraction: 94.6,
							cloud_area_fraction_high: 94.2,
							cloud_area_fraction_low: 6.4,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 13.3,
							fog_area_fraction: 0.3,
							relative_humidity: 98.9,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 200.3,
							wind_speed: 1.6,
							wind_speed_of_gust: 3.7,
							wind_speed_percentile_10: 1.0,
							wind_speed_percentile_90: 2.0,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 13.6,
							air_temperature_min: 12.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-23T21:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1013.5,
							air_temperature: 12.9,
							air_temperature_percentile_10: 12.3,
							air_temperature_percentile_90: 16.2,
							cloud_area_fraction: 90.7,
							cloud_area_fraction_high: 89.4,
							cloud_area_fraction_low: 10.1,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 12.9,
							fog_area_fraction: 0.7,
							relative_humidity: 99.4,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 186.9,
							wind_speed: 1.7,
							wind_speed_of_gust: 3.6,
							wind_speed_percentile_10: 1.0,
							wind_speed_percentile_90: 1.9,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.1,
							probability_of_thunder: 0.1,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 13.9,
							air_temperature_min: 12.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-23T22:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1014.0,
							air_temperature: 12.6,
							air_temperature_percentile_10: 11.9,
							air_temperature_percentile_90: 16.0,
							cloud_area_fraction: 81.1,
							cloud_area_fraction_high: 75.5,
							cloud_area_fraction_low: 20.6,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 12.6,
							fog_area_fraction: 1.2,
							relative_humidity: 99.6,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 187.6,
							wind_speed: 1.7,
							wind_speed_of_gust: 3.6,
							wind_speed_percentile_10: 1.2,
							wind_speed_percentile_90: 2.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.1,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 13.9,
							air_temperature_min: 12.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-23T23:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1014.2,
							air_temperature: 12.5,
							air_temperature_percentile_10: 11.8,
							air_temperature_percentile_90: 15.8,
							cloud_area_fraction: 99.1,
							cloud_area_fraction_high: 98.6,
							cloud_area_fraction_low: 26.8,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 12.5,
							fog_area_fraction: 2.4,
							relative_humidity: 99.9,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 185.0,
							wind_speed: 1.8,
							wind_speed_of_gust: 3.8,
							wind_speed_percentile_10: 1.2,
							wind_speed_percentile_90: 2.0,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 1.4,
							probability_of_thunder: 0.3,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 13.9,
							air_temperature_min: 12.9,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T00:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1014.7,
							air_temperature: 12.9,
							air_temperature_percentile_10: 12.2,
							air_temperature_percentile_90: 15.5,
							cloud_area_fraction: 99.7,
							cloud_area_fraction_high: 98.5,
							cloud_area_fraction_low: 69.9,
							cloud_area_fraction_medium: 14.4,
							dew_point_temperature: 12.9,
							fog_area_fraction: 98.5,
							relative_humidity: 100.0,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 180.0,
							wind_speed: 2.1,
							wind_speed_of_gust: 4.6,
							wind_speed_percentile_10: 0.9,
							wind_speed_percentile_90: 2.2,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "fog",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 2.6,
							probability_of_thunder: 0.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							air_temperature_max: 14.1,
							air_temperature_min: 13.2,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T01:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1015.0,
							air_temperature: 13.2,
							air_temperature_percentile_10: 12.5,
							air_temperature_percentile_90: 15.3,
							cloud_area_fraction: 99.9,
							cloud_area_fraction_high: 93.9,
							cloud_area_fraction_low: 96.6,
							cloud_area_fraction_medium: 50.6,
							dew_point_temperature: 13.2,
							fog_area_fraction: 98.4,
							relative_humidity: 100.0,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 187.7,
							wind_speed: 2.4,
							wind_speed_of_gust: 5.3,
							wind_speed_percentile_10: 1.5,
							wind_speed_percentile_90: 2.6,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "fog",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.8,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							air_temperature_max: 15.3,
							air_temperature_min: 13.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T02:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1015.4,
							air_temperature: 13.6,
							air_temperature_percentile_10: 12.7,
							air_temperature_percentile_90: 14.9,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 99.2,
							cloud_area_fraction_low: 95.8,
							cloud_area_fraction_medium: 91.0,
							dew_point_temperature: 13.6,
							fog_area_fraction: 2.4,
							relative_humidity: 99.7,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 200.5,
							wind_speed: 2.3,
							wind_speed_of_gust: 5.5,
							wind_speed_percentile_10: 1.3,
							wind_speed_percentile_90: 2.8,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.4,
							probability_of_thunder: 0.5,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 16.5,
							air_temperature_min: 13.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T03:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1015.7,
							air_temperature: 13.9,
							air_temperature_percentile_10: 12.2,
							air_temperature_percentile_90: 15.0,
							cloud_area_fraction: 99.1,
							cloud_area_fraction_high: 96.4,
							cloud_area_fraction_low: 59.3,
							cloud_area_fraction_medium: 65.3,
							dew_point_temperature: 13.8,
							fog_area_fraction: 0.3,
							relative_humidity: 98.5,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 211.0,
							wind_speed: 2.3,
							wind_speed_of_gust: 5.1,
							wind_speed_percentile_10: 1.4,
							wind_speed_percentile_90: 2.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 16.9,
							air_temperature_min: 13.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T04:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1016.2,
							air_temperature: 13.6,
							air_temperature_percentile_10: 11.9,
							air_temperature_percentile_90: 15.1,
							cloud_area_fraction: 92.9,
							cloud_area_fraction_high: 83.2,
							cloud_area_fraction_low: 41.7,
							cloud_area_fraction_medium: 2.8,
							dew_point_temperature: 13.4,
							fog_area_fraction: 0.2,
							relative_humidity: 98.3,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 223.3,
							wind_speed: 2.2,
							wind_speed_of_gust: 4.9,
							wind_speed_percentile_10: 1.5,
							wind_speed_percentile_90: 2.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.5,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 17.5,
							air_temperature_min: 13.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T05:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1016.7,
							air_temperature: 13.5,
							air_temperature_percentile_10: 12.0,
							air_temperature_percentile_90: 14.9,
							cloud_area_fraction: 60.2,
							cloud_area_fraction_high: 26.2,
							cloud_area_fraction_low: 46.9,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 13.2,
							fog_area_fraction: 0.0,
							relative_humidity: 97.2,
							ultraviolet_index_clear_sky: 0.1,
							wind_from_direction: 204.7,
							wind_speed: 1.8,
							wind_speed_of_gust: 4.7,
							wind_speed_percentile_10: 1.8,
							wind_speed_percentile_90: 2.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 18.2,
							air_temperature_min: 14.1,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T06:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1017.5,
							air_temperature: 14.1,
							air_temperature_percentile_10: 13.0,
							air_temperature_percentile_90: 15.8,
							cloud_area_fraction: 53.5,
							cloud_area_fraction_high: 6.9,
							cloud_area_fraction_low: 49.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 13.5,
							fog_area_fraction: 0.0,
							relative_humidity: 95.3,
							ultraviolet_index_clear_sky: 0.5,
							wind_from_direction: 209.6,
							wind_speed: 2.8,
							wind_speed_of_gust: 6.1,
							wind_speed_percentile_10: 2.2,
							wind_speed_percentile_90: 2.8,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 18.5,
							air_temperature_min: 15.3,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T07:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1018.1,
							air_temperature: 15.3,
							air_temperature_percentile_10: 14.5,
							air_temperature_percentile_90: 16.9,
							cloud_area_fraction: 28.3,
							cloud_area_fraction_high: 5.5,
							cloud_area_fraction_low: 24.2,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 13.5,
							fog_area_fraction: 0.0,
							relative_humidity: 88.3,
							ultraviolet_index_clear_sky: 1.1,
							wind_from_direction: 229.0,
							wind_speed: 3.3,
							wind_speed_of_gust: 7.5,
							wind_speed_percentile_10: 2.4,
							wind_speed_percentile_90: 3.4,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "fair_day",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.5,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 18.5,
							air_temperature_min: 16.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T08:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1019.0,
							air_temperature: 16.5,
							air_temperature_percentile_10: 15.5,
							air_temperature_percentile_90: 17.9,
							cloud_area_fraction: 44.5,
							cloud_area_fraction_high: 6.3,
							cloud_area_fraction_low: 40.8,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 12.4,
							fog_area_fraction: 0.0,
							relative_humidity: 76.6,
							ultraviolet_index_clear_sky: 1.7,
							wind_from_direction: 247.6,
							wind_speed: 3.7,
							wind_speed_of_gust: 8.6,
							wind_speed_percentile_10: 2.7,
							wind_speed_percentile_90: 3.7,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.4,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 18.5,
							air_temperature_min: 16.9,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T09:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1019.6,
							air_temperature: 16.9,
							air_temperature_percentile_10: 16.1,
							air_temperature_percentile_90: 18.4,
							cloud_area_fraction: 70.0,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 70.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 12.0,
							fog_area_fraction: 0.0,
							relative_humidity: 72.4,
							ultraviolet_index_clear_sky: 2.2,
							wind_from_direction: 252.6,
							wind_speed: 3.8,
							wind_speed_of_gust: 8.7,
							wind_speed_percentile_10: 3.0,
							wind_speed_percentile_90: 3.8,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.4,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 18.5,
							air_temperature_min: 16.9,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T10:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1020.3,
							air_temperature: 17.5,
							air_temperature_percentile_10: 16.5,
							air_temperature_percentile_90: 18.9,
							cloud_area_fraction: 60.0,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 60.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 12.0,
							fog_area_fraction: 0.0,
							relative_humidity: 70.1,
							ultraviolet_index_clear_sky: 2.4,
							wind_from_direction: 257.3,
							wind_speed: 3.5,
							wind_speed_of_gust: 8.7,
							wind_speed_percentile_10: 2.8,
							wind_speed_percentile_90: 3.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.4,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 18.5,
							air_temperature_min: 15.8,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T11:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1020.7,
							air_temperature: 18.2,
							air_temperature_percentile_10: 16.1,
							air_temperature_percentile_90: 19.6,
							cloud_area_fraction: 48.4,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 48.4,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 12.2,
							fog_area_fraction: 0.0,
							relative_humidity: 67.8,
							ultraviolet_index_clear_sky: 2.3,
							wind_from_direction: 249.0,
							wind_speed: 3.2,
							wind_speed_of_gust: 8.1,
							wind_speed_percentile_10: 3.1,
							wind_speed_percentile_90: 3.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 18.5,
							air_temperature_min: 15.2,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T12:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1021.1,
							air_temperature: 18.5,
							air_temperature_percentile_10: 16.6,
							air_temperature_percentile_90: 19.6,
							cloud_area_fraction: 47.7,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 47.7,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 12.1,
							fog_area_fraction: 0.0,
							relative_humidity: 66.0,
							ultraviolet_index_clear_sky: 1.9,
							wind_from_direction: 252.1,
							wind_speed: 3.3,
							wind_speed_of_gust: 7.8,
							wind_speed_percentile_10: 2.8,
							wind_speed_percentile_90: 3.6,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 0.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.2,
							probability_of_thunder: 0.8,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 18.2,
							air_temperature_min: 14.1,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T13:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1021.7,
							air_temperature: 18.2,
							air_temperature_percentile_10: 16.5,
							air_temperature_percentile_90: 19.6,
							cloud_area_fraction: 90.8,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 90.8,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 11.8,
							fog_area_fraction: 0.0,
							relative_humidity: 65.9,
							ultraviolet_index_clear_sky: 1.3,
							wind_from_direction: 258.3,
							wind_speed: 3.3,
							wind_speed_of_gust: 7.7,
							wind_speed_percentile_10: 2.7,
							wind_speed_percentile_90: 3.9,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.1,
							probability_of_thunder: 0.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 17.6,
							air_temperature_min: 13.1,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T14:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1022.4,
							air_temperature: 17.6,
							air_temperature_percentile_10: 15.7,
							air_temperature_percentile_90: 19.4,
							cloud_area_fraction: 94.1,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 94.1,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 11.8,
							fog_area_fraction: 0.0,
							relative_humidity: 68.7,
							ultraviolet_index_clear_sky: 0.6,
							wind_from_direction: 257.0,
							wind_speed: 3.1,
							wind_speed_of_gust: 7.5,
							wind_speed_percentile_10: 2.8,
							wind_speed_percentile_90: 3.5,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 1.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							air_temperature_max: 16.9,
							air_temperature_min: 12.1,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T15:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1023.1,
							air_temperature: 16.9,
							air_temperature_percentile_10: 15.1,
							air_temperature_percentile_90: 18.3,
							cloud_area_fraction: 72.6,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 72.6,
							cloud_area_fraction_medium: 0.2,
							dew_point_temperature: 12.1,
							fog_area_fraction: 0.0,
							relative_humidity: 71.3,
							ultraviolet_index_clear_sky: 0.2,
							wind_from_direction: 258.4,
							wind_speed: 3.0,
							wind_speed_of_gust: 7.2,
							wind_speed_percentile_10: 2.5,
							wind_speed_percentile_90: 3.5,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 1.1,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_night",
						},
						details: {
							air_temperature_max: 15.8,
							air_temperature_min: 10.9,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T16:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1023.8,
							air_temperature: 15.8,
							air_temperature_percentile_10: 14.4,
							air_temperature_percentile_90: 17.3,
							cloud_area_fraction: 60.9,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 60.9,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 11.1,
							fog_area_fraction: 0.0,
							relative_humidity: 73.3,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 240.8,
							wind_speed: 2.4,
							wind_speed_of_gust: 6.7,
							wind_speed_percentile_10: 1.4,
							wind_speed_percentile_90: 3.2,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 1.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_night",
						},
						details: {
							air_temperature_max: 15.2,
							air_temperature_min: 10.2,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T17:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1024.7,
							air_temperature: 15.2,
							air_temperature_percentile_10: 12.4,
							air_temperature_percentile_90: 16.2,
							cloud_area_fraction: 56.8,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 56.8,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 10.4,
							fog_area_fraction: 0.0,
							relative_humidity: 73.6,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 258.3,
							wind_speed: 2.3,
							wind_speed_of_gust: 5.7,
							wind_speed_percentile_10: 1.3,
							wind_speed_percentile_90: 3.3,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							air_temperature_max: 14.1,
							air_temperature_min: 9.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T18:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1025.4,
							air_temperature: 14.1,
							air_temperature_percentile_10: 11.2,
							air_temperature_percentile_90: 15.4,
							cloud_area_fraction: 30.8,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 30.8,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 9.6,
							fog_area_fraction: 0.0,
							relative_humidity: 74.8,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 264.9,
							wind_speed: 2.5,
							wind_speed_of_gust: 6.3,
							wind_speed_percentile_10: 1.1,
							wind_speed_percentile_90: 2.8,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "clearsky_night",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 2.0,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "fair_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.4,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							air_temperature_max: 13.1,
							air_temperature_min: 9.0,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-24T19:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1026.1,
							air_temperature: 13.1,
							air_temperature_percentile_10: 10.2,
							air_temperature_percentile_90: 14.1,
							cloud_area_fraction: 20.3,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 20.3,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 9.2,
							fog_area_fraction: 0.0,
							relative_humidity: 77.9,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 265.8,
							wind_speed: 2.7,
							wind_speed_of_gust: 5.7,
							wind_speed_percentile_10: 1.3,
							wind_speed_percentile_90: 2.7,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "fair_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.3,
						},
					},
				},
			},
			{
				time: "2023-09-24T20:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1026.7,
							air_temperature: 12.1,
							air_temperature_percentile_10: 9.4,
							air_temperature_percentile_90: 13.4,
							cloud_area_fraction: 13.0,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 13.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 9.1,
							fog_area_fraction: 0.0,
							relative_humidity: 82.3,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 246.5,
							wind_speed: 1.8,
							wind_speed_of_gust: 5.7,
							wind_speed_percentile_10: 1.3,
							wind_speed_percentile_90: 2.4,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "fair_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.3,
						},
					},
				},
			},
			{
				time: "2023-09-24T21:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1027.1,
							air_temperature: 10.9,
							air_temperature_percentile_10: 8.7,
							air_temperature_percentile_90: 12.5,
							cloud_area_fraction: 5.6,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 5.6,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 9.0,
							fog_area_fraction: 0.0,
							relative_humidity: 88.6,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 228.0,
							wind_speed: 1.6,
							wind_speed_of_gust: 3.8,
							wind_speed_percentile_10: 1.0,
							wind_speed_percentile_90: 2.2,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.1,
						},
					},
				},
			},
			{
				time: "2023-09-24T22:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1027.4,
							air_temperature: 10.2,
							air_temperature_percentile_10: 8.4,
							air_temperature_percentile_90: 12.2,
							cloud_area_fraction: 0.1,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 0.1,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 8.6,
							fog_area_fraction: 0.0,
							relative_humidity: 90.2,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 228.4,
							wind_speed: 1.8,
							wind_speed_of_gust: 3.9,
							wind_speed_percentile_10: 1.0,
							wind_speed_percentile_90: 2.4,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.1,
						},
					},
				},
			},
			{
				time: "2023-09-24T23:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1027.7,
							air_temperature: 9.5,
							air_temperature_percentile_10: 7.9,
							air_temperature_percentile_90: 11.8,
							cloud_area_fraction: 0.5,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 0.5,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 8.1,
							fog_area_fraction: 0.0,
							relative_humidity: 91.0,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 229.1,
							wind_speed: 1.8,
							wind_speed_of_gust: 3.9,
							wind_speed_percentile_10: 1.0,
							wind_speed_percentile_90: 2.2,
						},
					},
					next_1_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
							probability_of_thunder: 0.1,
						},
					},
				},
			},
			{
				time: "2023-09-25T00:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1028.0,
							air_temperature: 9.0,
							air_temperature_percentile_10: 7.3,
							air_temperature_percentile_90: 11.5,
							cloud_area_fraction: 2.3,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 2.3,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 7.7,
							fog_area_fraction: 0.0,
							relative_humidity: 91.5,
							ultraviolet_index_clear_sky: 0.0,
							wind_from_direction: 225.1,
							wind_speed: 1.6,
							wind_speed_of_gust: 3.9,
							wind_speed_percentile_10: 1.0,
							wind_speed_percentile_90: 2.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "clearsky_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 2.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							air_temperature_max: 10.4,
							air_temperature_min: 7.7,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-25T06:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1030.3,
							air_temperature: 10.4,
							air_temperature_percentile_10: 9.7,
							air_temperature_percentile_90: 11.3,
							cloud_area_fraction: 4.7,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 8.6,
							relative_humidity: 88.5,
							wind_from_direction: 208.3,
							wind_speed: 2.1,
							wind_speed_percentile_10: 1.4,
							wind_speed_percentile_90: 2.7,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 3.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_day",
						},
						details: {
							air_temperature_max: 17.2,
							air_temperature_min: 10.4,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 2.0,
						},
					},
				},
			},
			{
				time: "2023-09-25T12:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1030.7,
							air_temperature: 16.8,
							air_temperature_percentile_10: 15.8,
							air_temperature_percentile_90: 17.7,
							cloud_area_fraction: 25.0,
							cloud_area_fraction_high: 4.7,
							cloud_area_fraction_low: 5.5,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 9.1,
							relative_humidity: 60.1,
							wind_from_direction: 220.6,
							wind_speed: 1.4,
							wind_speed_percentile_10: 0.5,
							wind_speed_percentile_90: 2.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 2.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_day",
						},
						details: {
							air_temperature_max: 17.2,
							air_temperature_min: 11.6,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 2.0,
						},
					},
				},
			},
			{
				time: "2023-09-25T18:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1030.1,
							air_temperature: 11.8,
							air_temperature_percentile_10: 11.1,
							air_temperature_percentile_90: 13.4,
							cloud_area_fraction: 6.2,
							cloud_area_fraction_high: 3.5,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 8.8,
							relative_humidity: 81.6,
							wind_from_direction: 161.8,
							wind_speed: 2.0,
							wind_speed_percentile_10: 1.5,
							wind_speed_percentile_90: 2.6,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 2.0,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							air_temperature_max: 11.8,
							air_temperature_min: 8.4,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 0.0,
						},
					},
				},
			},
			{
				time: "2023-09-26T00:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1030.0,
							air_temperature: 8.4,
							air_temperature_percentile_10: 7.9,
							air_temperature_percentile_90: 10.3,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 100.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 6.2,
							relative_humidity: 85.9,
							wind_from_direction: 178.5,
							wind_speed: 2.2,
							wind_speed_percentile_10: 1.6,
							wind_speed_percentile_90: 2.8,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "cloudy",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 3.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 10.1,
							air_temperature_min: 7.7,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 2.0,
						},
					},
				},
			},
			{
				time: "2023-09-26T06:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1028.8,
							air_temperature: 10.1,
							air_temperature_percentile_10: 9.2,
							air_temperature_percentile_90: 11.2,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 100.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 8.2,
							relative_humidity: 87.7,
							wind_from_direction: 168.2,
							wind_speed: 2.7,
							wind_speed_percentile_10: 1.7,
							wind_speed_percentile_90: 3.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "cloudy",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 3.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 18.2,
							air_temperature_min: 10.1,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 2.0,
						},
					},
				},
			},
			{
				time: "2023-09-26T12:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1028.3,
							air_temperature: 18.2,
							air_temperature_percentile_10: 16.9,
							air_temperature_percentile_90: 20.4,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 100.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 11.4,
							relative_humidity: 64.5,
							wind_from_direction: 169.6,
							wind_speed: 2.3,
							wind_speed_percentile_10: 1.3,
							wind_speed_percentile_90: 3.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 3.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 18.5,
							air_temperature_min: 13.9,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 2.0,
						},
					},
				},
			},
			{
				time: "2023-09-26T18:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1027.1,
							air_temperature: 14.0,
							air_temperature_percentile_10: 12.4,
							air_temperature_percentile_90: 16.3,
							cloud_area_fraction: 96.1,
							cloud_area_fraction_high: 94.5,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 10.9,
							relative_humidity: 81.2,
							wind_from_direction: 139.5,
							wind_speed: 2.5,
							wind_speed_percentile_10: 1.7,
							wind_speed_percentile_90: 3.4,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 13.7,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 14.0,
							air_temperature_min: 11.7,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 2.0,
						},
					},
				},
			},
			{
				time: "2023-09-27T00:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1027.1,
							air_temperature: 11.7,
							air_temperature_percentile_10: 10.0,
							air_temperature_percentile_90: 15.1,
							cloud_area_fraction: 2.0,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 9.7,
							relative_humidity: 87.5,
							wind_from_direction: 147.6,
							wind_speed: 2.8,
							wind_speed_percentile_10: 1.8,
							wind_speed_percentile_90: 3.6,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 13.7,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							air_temperature_max: 13.1,
							air_temperature_min: 10.6,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 11.8,
						},
					},
				},
			},
			{
				time: "2023-09-27T06:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1027.3,
							air_temperature: 13.1,
							air_temperature_percentile_10: 11.4,
							air_temperature_percentile_90: 15.9,
							cloud_area_fraction: 0.0,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 11.3,
							relative_humidity: 88.8,
							wind_from_direction: 150.0,
							wind_speed: 3.6,
							wind_speed_percentile_10: 2.3,
							wind_speed_percentile_90: 4.0,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 7.8,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_day",
						},
						details: {
							air_temperature_max: 22.4,
							air_temperature_min: 13.1,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 2.0,
						},
					},
				},
			},
			{
				time: "2023-09-27T12:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1026.1,
							air_temperature: 22.1,
							air_temperature_percentile_10: 19.7,
							air_temperature_percentile_90: 23.6,
							cloud_area_fraction: 60.5,
							cloud_area_fraction_high: 37.5,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 16.6,
							relative_humidity: 70.3,
							wind_from_direction: 156.7,
							wind_speed: 3.6,
							wind_speed_percentile_10: 2.4,
							wind_speed_percentile_90: 4.0,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 5.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 22.1,
							air_temperature_min: 18.4,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 5.9,
						},
					},
				},
			},
			{
				time: "2023-09-27T18:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1024.3,
							air_temperature: 18.5,
							air_temperature_percentile_10: 16.0,
							air_temperature_percentile_90: 19.4,
							cloud_area_fraction: 0.0,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 14.5,
							relative_humidity: 77.1,
							wind_from_direction: 152.5,
							wind_speed: 3.8,
							wind_speed_percentile_10: 2.6,
							wind_speed_percentile_90: 4.2,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "clearsky_night",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 5.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							air_temperature_max: 18.5,
							air_temperature_min: 14.9,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 2.0,
						},
					},
				},
			},
			{
				time: "2023-09-28T00:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1023.8,
							air_temperature: 14.9,
							air_temperature_percentile_10: 12.3,
							air_temperature_percentile_90: 16.1,
							cloud_area_fraction: 0.0,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 11.9,
							relative_humidity: 82.0,
							wind_from_direction: 159.9,
							wind_speed: 3.8,
							wind_speed_percentile_10: 2.7,
							wind_speed_percentile_90: 4.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "clearsky_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 5.9,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							air_temperature_max: 14.9,
							air_temperature_min: 12.8,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 3.9,
						},
					},
				},
			},
			{
				time: "2023-09-28T06:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1023.6,
							air_temperature: 14.8,
							air_temperature_percentile_10: 13.3,
							air_temperature_percentile_90: 16.5,
							cloud_area_fraction: 1.2,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 12.0,
							relative_humidity: 83.3,
							wind_from_direction: 158.6,
							wind_speed: 3.8,
							wind_speed_percentile_10: 3.2,
							wind_speed_percentile_90: 4.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 13.7,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_day",
						},
						details: {
							air_temperature_max: 22.8,
							air_temperature_min: 14.8,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 3.9,
						},
					},
				},
			},
			{
				time: "2023-09-28T12:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1022.3,
							air_temperature: 22.5,
							air_temperature_percentile_10: 20.5,
							air_temperature_percentile_90: 23.7,
							cloud_area_fraction: 0.0,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 15.9,
							relative_humidity: 65.6,
							wind_from_direction: 157.4,
							wind_speed: 3.9,
							wind_speed_percentile_10: 2.8,
							wind_speed_percentile_90: 4.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "uncertain",
						},
						details: {
							probability_of_precipitation: 11.8,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_day",
						},
						details: {
							air_temperature_max: 22.6,
							air_temperature_min: 18.8,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 7.8,
						},
					},
				},
			},
			{
				time: "2023-09-28T18:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1022.3,
							air_temperature: 18.8,
							air_temperature_percentile_10: 15.2,
							air_temperature_percentile_90: 19.7,
							cloud_area_fraction: 98.8,
							cloud_area_fraction_high: 98.8,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.8,
							dew_point_temperature: 14.8,
							relative_humidity: 76.6,
							wind_from_direction: 155.0,
							wind_speed: 4.0,
							wind_speed_percentile_10: 3.0,
							wind_speed_percentile_90: 4.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 9.8,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 18.8,
							air_temperature_min: 14.8,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 7.8,
						},
					},
				},
			},
			{
				time: "2023-09-29T00:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1018.3,
							air_temperature: 14.8,
							air_temperature_percentile_10: 11.9,
							air_temperature_percentile_90: 16.7,
							cloud_area_fraction: 0.0,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 11.6,
							relative_humidity: 80.8,
							wind_from_direction: 195.2,
							wind_speed: 3.9,
							wind_speed_percentile_10: 2.1,
							wind_speed_percentile_90: 4.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "certain",
						},
						details: {
							probability_of_precipitation: 7.8,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							air_temperature_max: 14.8,
							air_temperature_min: 12.6,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 3.9,
						},
					},
				},
			},
			{
				time: "2023-09-29T06:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1020.2,
							air_temperature: 14.5,
							air_temperature_percentile_10: 13.0,
							air_temperature_percentile_90: 16.1,
							cloud_area_fraction: 33.6,
							cloud_area_fraction_high: 26.2,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 12.1,
							relative_humidity: 85.3,
							wind_from_direction: 176.0,
							wind_speed: 3.8,
							wind_speed_percentile_10: 2.5,
							wind_speed_percentile_90: 4.4,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 13.7,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_day",
						},
						details: {
							air_temperature_max: 22.2,
							air_temperature_min: 14.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 5.9,
						},
					},
				},
			},
			{
				time: "2023-09-29T12:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1020.6,
							air_temperature: 21.9,
							air_temperature_percentile_10: 17.0,
							air_temperature_percentile_90: 22.8,
							cloud_area_fraction: 27.0,
							cloud_area_fraction_high: 5.9,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 15.1,
							relative_humidity: 64.8,
							wind_from_direction: 172.2,
							wind_speed: 3.7,
							wind_speed_percentile_10: 1.6,
							wind_speed_percentile_90: 4.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 17.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_day",
						},
						details: {
							air_temperature_max: 22.0,
							air_temperature_min: 17.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 7.8,
						},
					},
				},
			},
			{
				time: "2023-09-29T18:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1019.8,
							air_temperature: 17.6,
							air_temperature_percentile_10: 13.2,
							air_temperature_percentile_90: 18.7,
							cloud_area_fraction: 7.4,
							cloud_area_fraction_high: 0.8,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 13.1,
							relative_humidity: 74.3,
							wind_from_direction: 171.7,
							wind_speed: 3.4,
							wind_speed_percentile_10: 1.7,
							wind_speed_percentile_90: 4.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
							symbol_confidence: "uncertain",
						},
						details: {
							probability_of_precipitation: 21.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "clearsky_night",
						},
						details: {
							air_temperature_max: 17.6,
							air_temperature_min: 13.6,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 11.8,
						},
					},
				},
			},
			{
				time: "2023-09-30T00:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1018.9,
							air_temperature: 13.6,
							air_temperature_percentile_10: 10.9,
							air_temperature_percentile_90: 15.4,
							cloud_area_fraction: 23.0,
							cloud_area_fraction_high: 19.1,
							cloud_area_fraction_low: 0.0,
							cloud_area_fraction_medium: 0.0,
							dew_point_temperature: 11.2,
							relative_humidity: 84.9,
							wind_from_direction: 172.9,
							wind_speed: 3.2,
							wind_speed_percentile_10: 1.6,
							wind_speed_percentile_90: 4.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 23.5,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_night",
						},
						details: {
							air_temperature_max: 13.9,
							air_temperature_min: 11.9,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 15.7,
						},
					},
				},
			},
			{
				time: "2023-09-30T06:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1015.6,
							air_temperature: 13.6,
							air_temperature_percentile_10: 11.9,
							air_temperature_percentile_90: 15.4,
							cloud_area_fraction: 100.0,
							cloud_area_fraction_high: 99.2,
							cloud_area_fraction_low: 5.1,
							cloud_area_fraction_medium: 16.0,
							dew_point_temperature: 11.7,
							relative_humidity: 88.1,
							wind_from_direction: 171.0,
							wind_speed: 3.5,
							wind_speed_percentile_10: 1.9,
							wind_speed_percentile_90: 4.4,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "cloudy",
							symbol_confidence: "uncertain",
						},
						details: {
							probability_of_precipitation: 23.5,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 18.5,
							air_temperature_min: 13.6,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 17.6,
						},
					},
				},
			},
			{
				time: "2023-09-30T12:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1013.7,
							air_temperature: 17.9,
							air_temperature_percentile_10: 15.8,
							air_temperature_percentile_90: 21.9,
							cloud_area_fraction: 99.2,
							cloud_area_fraction_high: 89.1,
							cloud_area_fraction_low: 14.1,
							cloud_area_fraction_medium: 62.5,
							dew_point_temperature: 13.8,
							relative_humidity: 76.2,
							wind_from_direction: 227.0,
							wind_speed: 3.5,
							wind_speed_percentile_10: 1.6,
							wind_speed_percentile_90: 4.7,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 21.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 18.6,
							air_temperature_min: 14.8,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 15.7,
						},
					},
				},
			},
			{
				time: "2023-09-30T18:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1013.3,
							air_temperature: 15.0,
							air_temperature_percentile_10: 12.7,
							air_temperature_percentile_90: 17.7,
							cloud_area_fraction: 97.7,
							cloud_area_fraction_high: 22.7,
							cloud_area_fraction_low: 7.8,
							cloud_area_fraction_medium: 47.7,
							dew_point_temperature: 12.2,
							relative_humidity: 82.8,
							wind_from_direction: 242.2,
							wind_speed: 3.6,
							wind_speed_percentile_10: 1.8,
							wind_speed_percentile_90: 4.6,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 17.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "cloudy",
						},
						details: {
							air_temperature_max: 15.0,
							air_temperature_min: 12.5,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 9.8,
						},
					},
				},
			},
			{
				time: "2023-10-01T00:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1012.9,
							air_temperature: 12.5,
							air_temperature_percentile_10: 10.2,
							air_temperature_percentile_90: 14.8,
							cloud_area_fraction: 40.6,
							cloud_area_fraction_high: 1.2,
							cloud_area_fraction_low: 2.7,
							cloud_area_fraction_medium: 3.1,
							dew_point_temperature: 10.1,
							relative_humidity: 84.7,
							wind_from_direction: 222.8,
							wind_speed: 3.4,
							wind_speed_percentile_10: 1.6,
							wind_speed_percentile_90: 4.5,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 23.5,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_night",
						},
						details: {
							air_temperature_max: 12.9,
							air_temperature_min: 11.2,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 11.8,
						},
					},
				},
			},
			{
				time: "2023-10-01T06:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1012.2,
							air_temperature: 12.7,
							air_temperature_percentile_10: 11.1,
							air_temperature_percentile_90: 14.8,
							cloud_area_fraction: 20.3,
							cloud_area_fraction_high: 2.3,
							cloud_area_fraction_low: 4.7,
							cloud_area_fraction_medium: 1.6,
							dew_point_temperature: 10.5,
							relative_humidity: 85.9,
							wind_from_direction: 221.2,
							wind_speed: 3.2,
							wind_speed_percentile_10: 1.8,
							wind_speed_percentile_90: 4.4,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "uncertain",
						},
						details: {
							probability_of_precipitation: 31.4,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_day",
						},
						details: {
							air_temperature_max: 16.7,
							air_temperature_min: 12.7,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 19.6,
						},
					},
				},
			},
			{
				time: "2023-10-01T12:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1015.5,
							air_temperature: 16.1,
							air_temperature_percentile_10: 14.0,
							air_temperature_percentile_90: 20.2,
							cloud_area_fraction: 83.2,
							cloud_area_fraction_high: 48.4,
							cloud_area_fraction_low: 11.7,
							cloud_area_fraction_medium: 14.8,
							dew_point_temperature: 11.6,
							relative_humidity: 74.2,
							wind_from_direction: 253.0,
							wind_speed: 3.3,
							wind_speed_percentile_10: 1.5,
							wind_speed_percentile_90: 5.0,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 23.5,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
						},
						details: {
							air_temperature_max: 17.1,
							air_temperature_min: 13.2,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 15.7,
						},
					},
				},
			},
			{
				time: "2023-10-01T18:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1014.9,
							air_temperature: 13.3,
							air_temperature_percentile_10: 11.1,
							air_temperature_percentile_90: 16.5,
							cloud_area_fraction: 29.7,
							cloud_area_fraction_high: 1.2,
							cloud_area_fraction_low: 9.4,
							cloud_area_fraction_medium: 2.0,
							dew_point_temperature: 9.8,
							relative_humidity: 79.0,
							wind_from_direction: 218.9,
							wind_speed: 3.0,
							wind_speed_percentile_10: 1.5,
							wind_speed_percentile_90: 4.4,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_night",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 23.5,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_night",
						},
						details: {
							air_temperature_max: 13.3,
							air_temperature_min: 9.8,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 19.6,
						},
					},
				},
			},
			{
				time: "2023-10-02T00:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1016.2,
							air_temperature: 9.9,
							air_temperature_percentile_10: 8.5,
							air_temperature_percentile_90: 13.0,
							cloud_area_fraction: 31.2,
							cloud_area_fraction_high: 0.8,
							cloud_area_fraction_low: 3.1,
							cloud_area_fraction_medium: 2.7,
							dew_point_temperature: 7.9,
							relative_humidity: 87.6,
							wind_from_direction: 213.1,
							wind_speed: 2.8,
							wind_speed_percentile_10: 1.5,
							wind_speed_percentile_90: 4.1,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "fair_day",
							symbol_confidence: "uncertain",
						},
						details: {
							probability_of_precipitation: 27.5,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_night",
						},
						details: {
							air_temperature_max: 11.4,
							air_temperature_min: 9.3,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 15.7,
						},
					},
				},
			},
			{
				time: "2023-10-02T06:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1015.9,
							air_temperature: 11.4,
							air_temperature_percentile_10: 9.2,
							air_temperature_percentile_90: 13.1,
							cloud_area_fraction: 22.3,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 3.5,
							cloud_area_fraction_medium: 3.5,
							dew_point_temperature: 9.3,
							relative_humidity: 86.7,
							wind_from_direction: 206.5,
							wind_speed: 3.3,
							wind_speed_percentile_10: 1.6,
							wind_speed_percentile_90: 4.3,
						},
					},
					next_12_hours: {
						summary: {
							symbol_code: "partlycloudy_day",
							symbol_confidence: "somewhat certain",
						},
						details: {
							probability_of_precipitation: 27.5,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_day",
						},
						details: {
							air_temperature_max: 16.1,
							air_temperature_min: 11.4,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 19.6,
						},
					},
				},
			},
			{
				time: "2023-10-02T12:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1015.1,
							air_temperature: 15.4,
							air_temperature_percentile_10: 13.1,
							air_temperature_percentile_90: 17.9,
							cloud_area_fraction: 30.5,
							cloud_area_fraction_high: 0.0,
							cloud_area_fraction_low: 11.7,
							cloud_area_fraction_medium: 5.5,
							dew_point_temperature: 8.5,
							relative_humidity: 63.4,
							wind_from_direction: 234.0,
							wind_speed: 3.9,
							wind_speed_percentile_10: 1.6,
							wind_speed_percentile_90: 4.6,
						},
					},
					next_6_hours: {
						summary: {
							symbol_code: "fair_day",
						},
						details: {
							air_temperature_max: 15.7,
							air_temperature_min: 11.6,
							precipitation_amount: 0.0,
							precipitation_amount_max: 0.0,
							precipitation_amount_min: 0.0,
							probability_of_precipitation: 17.6,
						},
					},
				},
			},
			{
				time: "2023-10-02T18:00:00Z",
				data: {
					instant: {
						details: {
							air_pressure_at_sea_level: 1017.8,
							air_temperature: 11.7,
							air_temperature_percentile_10: 10.5,
							air_temperature_percentile_90: 14.4,
							cloud_area_fraction: 96.9,
							cloud_area_fraction_high: 39.1,
							cloud_area_fraction_low: 10.9,
							cloud_area_fraction_medium: 48.4,
							dew_point_temperature: 8.9,
							relative_humidity: 82.6,
							wind_from_direction: 206.0,
							wind_speed: 3.6,
							wind_speed_percentile_10: 1.6,
							wind_speed_percentile_90: 4.6,
						},
					},
				},
			},
		],
	},
};
