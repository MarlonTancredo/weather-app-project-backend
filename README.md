# A backend project that fetch weather data from an api.

## Main technologies:

```
Node

Nodemon

Type-script

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
        "name": "London",
        "admin": "England",
        "country": "United Kingdom",
        "latitude": 51.50853,
        "longitude": -0.12574,
        "timezone": "Europe/London"
    },
    "weatherInformation": {
        "current_air_temperature": 14.2,
        "wind_from_direction": 220.6,
        "wind_speed": 4,
        "high_air_temperature": 13.7,
        "low_air_temperature": 11.8,
        "symbol_code": "cloudy"
    }
}
```
