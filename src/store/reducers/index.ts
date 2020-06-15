import { combineReducers } from 'redux';

import { storeKeys } from '../consts/storeKeys';
import { CryptoReducer } from './crypto';
import { WeatherReducer } from './weather';

const rootReducer = combineReducers({
  [storeKeys.weather]: WeatherReducer,
  [storeKeys.crypto]: CryptoReducer
});

export default rootReducer;