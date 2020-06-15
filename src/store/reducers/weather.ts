import produce from 'immer';
import _ from 'lodash';
import { createAction, handleActions } from 'redux-actions';

import { ActionsType, PayloadType, Loadable } from '../types';
import { Weather } from '../consts/actionTypes';
import OpenWeatherMapApi, { WeatherData } from '../../services/OpenWeatherMap';

export class WeatherStore {
  weatherData: Loadable<WeatherData> = { loading: false, data: {} };
};

const initialState = { ...new WeatherStore() };

export const weatherActions = {
  fetchWeatherDataStart: createAction(Weather.FETCH_WEATHER_DATA_START),
  fetchWeatherDataOk: createAction(Weather.FETCH_WEATHER_DATA_OK, (data: WeatherData) => ({ data })),
  fetchWeatherDataError: createAction(Weather.FETCH_WEATHER_DATA_ERROR, (error: string) => ({ error }))
};

export const weatherThunks = {
  fetchWeather: () => async dispatch => {
    dispatch(weatherActions.fetchWeatherDataStart());
    try {
      const data = await OpenWeatherMapApi.fetchWeatherData() as WeatherData;
      dispatch(weatherActions.fetchWeatherDataOk(data));
    } catch (e) {
      dispatch(weatherActions.fetchWeatherDataError(e.toString()));
    }
  }
};

export type WeatherActions = ActionsType<typeof weatherActions>;
type WeatherPayload = PayloadType<WeatherActions>;

export const WeatherReducer = handleActions<WeatherStore, WeatherPayload>({
  [Weather.FETCH_WEATHER_DATA_START]: (state) => produce(state, draft => {
    draft.weatherData.loading = true;
    draft.weatherData.error = false;
  }),
  [Weather.FETCH_WEATHER_DATA_ERROR]: (state, { payload }) => produce(state, draft => {
    draft.weatherData.loading = false;
    draft.weatherData.error = payload.error;
  }),
  [Weather.FETCH_WEATHER_DATA_OK]: (state, { payload }) => produce(state, draft => {
    draft.weatherData.loading = false;
    draft.weatherData.error = false;
    draft.weatherData.data = payload.data;
  })
}, initialState);