import React from 'react';

import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Tile from '../../components/Tile';
import { Color } from '../../components/types';
import { WeatherData } from '../../services/OpenWeatherMap';

type WeatherWidgetProps = {
  loading?: boolean;
  error?: boolean | string;
  weatherData: WeatherData;
  hasWeatherType?: boolean;
  color?: Color;
};

const cloudsToEmoji = (clouds?: number) => {
  if (clouds) {
    if (clouds > 75) {
      return '☁️';
    } else if (clouds > 50) {
      return '🌥';
    } else if (clouds > 25) {
      return '⛅';
    } else {
      return '🌤';
    }
  }
}

const weatherToEmoji = (name?: string, clouds?: number) => {
  switch (name) {
    case 'Thunderstorm':
      return '⛈';
    case 'Drizzle':
    case 'Rain':
      return '🌧';
    case 'Snow':
      return '🌨';
    case 'Mist':
    case 'Fog':
      return '🌁';
    case 'Clear':
      return '☀️';
    case 'Clouds':
      return cloudsToEmoji(clouds);
  }
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  loading = false,
  error = false,
  hasWeatherType = false,
  weatherData,
  color = 'purple'
}) => (
    <Tile loading={loading} color={color}>
      {
        !loading && !error &&
        <Grid>
          <Row>
            Temperature: {weatherData.current?.temp}
          </Row>
          <Row>
            Pressure: {weatherData.current?.pressure} hPa
          </Row>
          <Row>
            Humidity: {weatherData.current?.humidity}%
          </Row>
          {
            hasWeatherType &&
            <Row>
              Weather: {
                weatherData.current?.weather?.map(
                  weatherType => `${weatherType.main} ${weatherToEmoji(
                    weatherType.main,
                    weatherData.current?.clouds
                  )}`
                )
              }
            </Row>
          }
        </Grid>
      }
    </Tile>
  );

export default WeatherWidget;