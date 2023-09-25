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
        "name": "Riga",
        "admin": "Rīga",
        "country": "Latvia",
        "latitude": 56.946,
        "longitude": 24.10589,
        "timezone": "Europe/Riga"
    },
    "weatherInformation": {
        "updated_at": "2023-09-25T07:39:33Z",
        "current_day": {
            "time": "Mon Sep 25 2023",
            "current_air_temperature": 13.6,
            "high_air_temperature": 17.5,
            "low_air_temperature": 15.3,
            "wind_from_direction": 208.7,
            "wind_speed": 2.7
        },
        "timeseries": [
            {
                "time": "Tue Sep 26 2023",
                "symbol_code": "partlycloudy_day",
                "high_air_temperature": 18.1,
                "low_air_temperature": 12.3
            }
        ]
    }
}
```
