//Testing geocode api

async function fetchGeoLocation() {
  const response = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=London&count=10https://geocoding-api.open-meteo.com/v1/search?name=London&count=1"
  );

  const data = await response.json();
  console.log(data);
}

fetchGeoLocation();
