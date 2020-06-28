import React, { useEffect } from 'react';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { WeatherStore, weatherThunks } from '../../store/reducers/weather';
import { weatherSelectors } from '../../store/selectors/weather';
import WeatherWidget from '../../widgets/WeatherWidget';

const WeatherWidgetContainer: React.FC<{}> = () => {
  const dispatch: ThunkDispatch<WeatherStore, any, AnyAction> = useDispatch();
  const weatherData = useSelector(weatherSelectors.weatherData);

  // Load data on mount
  useEffect(() => {
    dispatch(weatherThunks.fetchWeather())
  }, []);

  // Refresh data every minute
  useEffect(() => {
    const interval = setInterval(() => dispatch(weatherThunks.fetchWeather()), 60 * 1000);
    return () => clearInterval(interval);
  }, [weatherData]);

  return <WeatherWidget
    loading={weatherData.loading}
    error={weatherData.error}
    weatherData={weatherData.data}
    hasWeatherType
  />;
}

export default WeatherWidgetContainer;