export type LocalWeatherData = {
  temperature?: number;
  pressure?: number;
  humidity?: number;
}

class LocalWeatherApi {
  getApiUrl = () => 'http://192.168.100.100/api/weather';

  fetchWeatherData: (() => Promise<LocalWeatherData>) = async () => {
    return (await fetch(this.getApiUrl())).json();
  }
}

export default new LocalWeatherApi();