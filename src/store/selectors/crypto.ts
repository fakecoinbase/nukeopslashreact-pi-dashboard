import { createSelector } from 'reselect';

import { storeKeys } from '../consts/storeKeys';
import { CryptoStore } from '../reducers/crypto';

const cryptoStore = s => s[storeKeys.crypto] as CryptoStore;

export const createCurrencySelector = (currency: string) => createSelector(
  cryptoStore,
  s => s[currency]
);