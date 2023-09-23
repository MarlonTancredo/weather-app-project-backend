export type WeatherDetails = {
  current_air_temperature?: number; // celsius
  high_air_temperature?: number; // celsius
  low_air_temperature: number; // celsius
  wind_from_direction?: number; // degrees - (0° is north, 90° east, etc.)
  wind_speed?: number; // m/s
  symbol_code: string;
};

export type LocalTime = {
  year: number; //2023;
  month: number; //9;
  day: number; //16;
  hour: number; //10;
  minute: number; //39;
  seconds?: number; //6;
  milliSeconds?: number; //178;
  dateTime?: string; //"2023-09-16T10:39:06.1788227";
  date?: string; //"09/16/2023";
  time?: string; //"10:39";
  timeZone?: string; //"Europe/Riga";
  dayOfWeek: string; //"Saturday";
  dstActive?: boolean; //true;
};

export type WeatherSymbol =
  | "clearsky_day"
  | "clearsky_night"
  | "clearsky_polartwilight"
  | "fair_day"
  | "fair_night"
  | "fair_polartwilight"
  | "lightssnowshowersandthunder_day"
  | "lightssnowshowersandthunder_night"
  | "lightssnowshowersandthunder_polartwilight"
  | "lightsnowshowers_day"
  | "lightsnowshowers_night"
  | "lightsnowshowers_polartwilight"
  | "heavyrainandthunder"
  | "heavysnowandthunder"
  | "rainandthunder"
  | "heavysleetshowersandthunder_day"
  | "heavysleetshowersandthunder_night"
  | "heavysleetshowersandthunder_polartwilight"
  | "heavysnow"
  | "heavyrainshowers_day"
  | "heavyrainshowers_night"
  | "heavyrainshowers_polartwilight"
  | "lightsleet"
  | "heavyrain"
  | "lightrainshowers_day"
  | "lightrainshowers_night"
  | "lightrainshowers_polartwilight"
  | "heavysleetshowers_day"
  | "heavysleetshowers_night"
  | "heavysleetshowers_polartwilight"
  | "lightsleetshowers_day"
  | "lightsleetshowers_night"
  | "lightsleetshowers_polartwilight"
  | "snow"
  | "heavyrainshowersandthunder_day"
  | "heavyrainshowersandthunder_night"
  | "heavyrainshowersandthunder_polartwilight"
  | "snowshowers_day"
  | "snowshowers_night"
  | "snowshowers_polartwilight"
  | "fog"
  | "snowshowersandthunder_day"
  | "snowshowersandthunder_night"
  | "snowshowersandthunder_polartwilight"
  | "lightsnowandthunder"
  | "heavysleetandthunder"
  | "lightrain"
  | "rainshowersandthunder_day"
  | "rainshowersandthunder_night"
  | "rainshowersandthunder_polartwilight"
  | "rain"
  | "lightsnow"
  | "lightrainshowersandthunder_day"
  | "lightrainshowersandthunder_night"
  | "lightrainshowersandthunder_polartwilight"
  | "heavysleet"
  | "sleetandthunder"
  | "lightrainandthunder"
  | "sleet"
  | "lightssleetshowersandthunder_day"
  | "lightssleetshowersandthunder_night"
  | "lightssleetshowersandthunder_polartwilight"
  | "lightsleetandthunder"
  | "partlycloudy_day"
  | "partlycloudy_night"
  | "partlycloudy_polartwilight"
  | "sleetshowersandthunder_day"
  | "sleetshowersandthunder_night"
  | "sleetshowersandthunder_polartwilight"
  | "rainshowers_day"
  | "rainshowers_night"
  | "rainshowers_polartwilight"
  | "snowandthunder"
  | "sleetshowers_day"
  | "sleetshowers_night"
  | "sleetshowers_polartwilight"
  | "cloudy"
  | "heavysnowshowersandthunder_day"
  | "heavysnowshowersandthunder_night"
  | "heavysnowshowersandthunder_polartwilight"
  | "heavysnowshowers_day"
  | "heavysnowshowers_night"
  | "heavysnowshowers_polartwilight";

export type LocationDetails = {
  name: string;
  country: string;
  admin: string; // calculated from admin1, admin2, admin3
  latitude?: number;
  longitude?: number;
  timezone?: string;
};

export type LocationForecast = {
  updated_at: string; //from properties.meta.updated_at
  location: LocationDetails;
  local_time: LocalTime;
  current_day: WeatherDetails; // from current time til
  timeseries: WeatherDetails[];
};
