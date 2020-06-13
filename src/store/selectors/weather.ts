import { createSelector } from 'reselect';

import { storeKeys } from '../consts/storeKeys';
import { WeatherStore } from '../reducers/weather';

const weatherStore = s => s[storeKeys.weather] as WeatherStore;

export const weatherSelectors = {
  weatherData: createSelector(
    weatherStore,
    s => s.weatherData
  )
};