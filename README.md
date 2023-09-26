# A backend project that fetch weather data from an api.

## Main technologies:

```
Node

Nodemon

Type-script

Express

Jest
```

## Running this project:

```
Install all dependencies with: npm install

Starting project with: npm start

Testing: npm test
```

## Using api:

```typescript

`http://localhost:3000/weather/?cityName=${London}`

//Api return a JSON with current weather given a city name endpoint:
{
    "geoLocation": {
        "name": "Karaganda",
        "country": "Kazakhstan",
        "latitude": 49.80187,
        "longitude": 73.10211,
        "timezone": "Asia/Almaty"
    },
    "localTime": {
        "year": 2023,
        "month": 9,
        "day": 26,
        "hour": 18,
        "minute": 7,
        "seconds": 21,
        "milliSeconds": 625,
        "dateTime": "2023-09-26T18:07:21.625653",
        "date": "09/26/2023",
        "time": "18:07",
        "timeZone": "Asia/Almaty",
        "dayOfWeek": "Tuesday",
        "dstActive": false
    },
    "weatherInformation": {
        "updated_at": "2023-09-26T11:50:08Z",
        "current_day": {
            "time": "Tue Sep 26 2023",
            "current_air_temperature": 18.6,
            "high_air_temperature": 14.9,
            "low_air_temperature": 12.2,
            "wind_from_direction": 340.6,
            "wind_speed": 2.5
        },
        "timeseries": [
            {
                "time": "Wed Sep 27 2023",
                "symbol_code": "lightrainshowers_day",
                "high_air_temperature": 18.9,
                "low_air_temperature": 15.5
            },
            {
                "time": "Thu Sep 28 2023",
                "symbol_code": "lightrain",
                "high_air_temperature": 14.3,
                "low_air_temperature": 12.4
            },
            {
                "time": "Fri Sep 29 2023",
                "symbol_code": "partlycloudy_day",
                "high_air_temperature": 14.7,
                "low_air_temperature": 13
            }
        ]
    }
}