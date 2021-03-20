const url "https://weather-api.endigo.now.sh/api/v1/weather";

fetch(url) 
    .then((res) => res.json())
    .then((data) => {
        city = data.Cities[0].Name;
        hello.innerHTM = city.Name;
        let dayWeather = data.Cities
    })