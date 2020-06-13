import { combineReducers } from 'redux';

import { storeKeys } from '../consts/storeKeys';
import { WeatherReducer } from './weather';

const rootReducer = combineReducers({
  [storeKeys.weather]: WeatherReducer
});

export default rootReducer;