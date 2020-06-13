type DashboardConfig = {
  // Weather
  openWeatherMapApiKey: string;
  lat: number;
  lon: number
};

const config: DashboardConfig = {
  openWeatherMapApiKey: '',
  lat: 0,
  lon: 0
};

export default config;