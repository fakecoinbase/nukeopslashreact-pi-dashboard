import config from '../config';

export type WeatherType = {
  id: number;
  main: string;
  description: string;
};

export type WeatherData = {
  current?: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    clouds: number;
    weather: WeatherType[];
  }
};

class OpenWeatherMapApi {
  getApiUrl = (
    { lat, lon, appId }:
      { lat: number, lon: number, appId: string }
  ) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=${appId}`

  fetchWeatherData: (() => Promise<Response>) = () => {
    return fetch(this.getApiUrl({ lat: config.lat, lon: config.lon, appId: config.openWeatherMapApiKey }))
  }
}

export default new OpenWeatherMapApi();