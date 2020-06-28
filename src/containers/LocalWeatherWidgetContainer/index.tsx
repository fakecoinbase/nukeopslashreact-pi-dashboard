import React, { useEffect } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';

import WeatherWidget from '../../widgets/WeatherWidget';

import { weatherSelectors } from '../../store/selectors/weather';
import { WeatherStore, weatherThunks } from '../../store/reducers/weather';

const LocalWeatherWidgetContainer: React.FC<{}> = () => {
  const dispatch: ThunkDispatch<WeatherStore, any, AnyAction> = useDispatch();
  const localWeatherData = useSelector(weatherSelectors.localWeatherData);

 // Load data on mount
 useEffect(() => {
  dispatch(weatherThunks.fetchLocalWeather())
}, []);

// Refresh data every minute
useEffect(() => {
  const interval = setInterval(() => dispatch(weatherThunks.fetchLocalWeather()), 60 * 1000);
  return () => clearInterval(interval);
}, [localWeatherData]);

  return <WeatherWidget
    color='blue'
    loading={localWeatherData.loading}
    error={localWeatherData.error}
    weatherData={{
      current: {
        temp: localWeatherData.data.temperature || 0,
        pressure: localWeatherData.data.pressure || 0,
        humidity: localWeatherData.data.humidity || 0
      }
    }}
  />
};

export default LocalWeatherWidgetContainer;