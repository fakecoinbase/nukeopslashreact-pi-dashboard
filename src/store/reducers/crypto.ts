import produce from 'immer';
import _ from 'lodash';
import { createAction, handleActions } from 'redux-actions';

import { ActionsType, PayloadType, Loadable } from '../types';
import { Crypto } from '../consts/actionTypes';
import CoinbaseApi, { PriceDataPoint } from '../../services/Coinbase';

export class CryptoStore {
  [currency: string]: Loadable<PriceDataPoint[]>;
};

const initialState = { ...new CryptoStore() };

export const cryptoActions = {
  fetchCryptoDataStart: createAction(Crypto.FETCH_CRYPTO_DATA_START, (currency: string) => ({ currency })),
  fetchCryptoDataOk: createAction(Crypto.FETCH_CRYPTO_DATA_OK, (currency: string, data: PriceDataPoint[]) => ({ currency, data })),
  fetchCryptoDataError: createAction(Crypto.FETCH_CRYPTO_DATA_ERROR, (currency: string, error: string) => ({ currency, error }))
};

export const cryptoThunks = {
  fetchEth: () => async dispatch => {
    const currency = 'eth';
    dispatch(cryptoActions.fetchCryptoDataStart(currency));
    try {
      const data = await CoinbaseApi.fetchEthData();
      dispatch(cryptoActions.fetchCryptoDataOk(currency, data.data.prices));
    } catch(e) {
      dispatch(cryptoActions.fetchCryptoDataError(currency, e.toString()));
    }
  }
};

export type CryptoActions = ActionsType<typeof cryptoActions>;
export type CryptoPayload = PayloadType<CryptoActions>;

export const CryptoReducer = handleActions<CryptoStore, CryptoPayload>({
  [Crypto.FETCH_CRYPTO_DATA_START]: (state, { payload }) => produce(state, draft => {
    draft[payload.currency] = {
      loading: true,
      error: false,
      data: []
    };
  }),
  [Crypto.FETCH_CRYPTO_DATA_ERROR]: (state, { payload }) => produce(state, draft => {
    draft[payload.currency] = {
      loading: false,
      error: payload.error,
      data: []
    };
  }),
  [Crypto.FETCH_CRYPTO_DATA_OK]: (state, { payload }) => produce(state, draft => {
    draft[payload.currency] = {
      loading: false,
      error: false,
      data: payload.data
    };
  }),
}, initialState);