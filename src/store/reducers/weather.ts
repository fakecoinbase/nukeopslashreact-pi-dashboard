import produce from 'immer';
import _ from 'lodash';
import { createAction, handleActions } from 'redux-actions';

import { ActionsType, PayloadType, Loadable } from '../types';
import { Weather } from '../consts/actionTypes';
import OpenWeatherMapApi, { WeatherData } from '../../services/OpenWeatherMap';
import LocalWeatherApi, { LocalWeatherData } from '../../services/LocalWeather';
import { create } from 'domain';

export class WeatherStore {
  weatherData: Loadable<WeatherData> = { loading: false, data: {} };
  localWeatherData: Loadable<LocalWeatherData> = { loading: false, data: {} };
};

const initialState = { ...new WeatherStore() };

export const weatherActions = {
  fetchWeatherDataStart: createAction(Weather.FETCH_WEATHER_DATA_START),
  fetchWeatherDataOk: createAction(Weather.FETCH_WEATHER_DATA_OK, (data: WeatherData) => ({ data })),
  fetchWeatherDataError: createAction(Weather.FETCH_WEATHER_DATA_ERROR, (error: string) => ({ error })),

  fetchLocalWeatherDataStart: createAction(Weather.FETCH_LOCAL_WEATHER_DATA_START),
  fetchLocalWeatherDataOk: createAction(Weather.FETCH_LOCAL_WEATHER_DATA_OK, (data: LocalWeatherData) => ({ data })),
  fetchLocalWeatherDataError: createAction(Weather.FETCH_LOCAL_WEATHER_DATA_ERROR, (error: string) => ({ error }))
};

export const weatherThunks = {
  fetchWeather: () => async dispatch => {
    dispatch(weatherActions.fetchWeatherDataStart());
    try {
      const data = await OpenWeatherMapApi.fetchWeatherData();
      dispatch(weatherActions.fetchWeatherDataOk(data));
    } catch (e) {
      dispatch(weatherActions.fetchWeatherDataError(e.toString()));
    }
  },

  fetchLocalWeather: () => async dispatch => {
    dispatch(weatherActions.fetchLocalWeatherDataStart());
    try {
      const data = await LocalWeatherApi.fetchWeatherData();
      dispatch(weatherActions.fetchLocalWeatherDataOk(data));
    } catch (e) {
      dispatch(weatherActions.fetchLocalWeatherDataError(e.toString()));
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
  }),
  [Weather.FETCH_LOCAL_WEATHER_DATA_START]: (state) => produce(state, draft => {
    draft.localWeatherData.loading = true;
    draft.localWeatherData.error = false;
  }),
  [Weather.FETCH_LOCAL_WEATHER_DATA_ERROR]: (state, { payload }) => produce(state, draft => {
    draft.localWeatherData.loading = false;
    draft.localWeatherData.error = payload.error;
  }),
  [Weather.FETCH_LOCAL_WEATHER_DATA_OK]: (state, { payload }) => produce(state, draft => {
    draft.localWeatherData.loading = false;
    draft.localWeatherData.error = false;
    draft.localWeatherData.data = payload.data;
  }),
}, initialState);